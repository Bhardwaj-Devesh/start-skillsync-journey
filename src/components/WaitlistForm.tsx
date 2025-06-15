import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { Mail, Loader2 } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import SignupCounter from './SignupCounter';

const WaitlistForm = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    toast
  } = useToast();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast({
        title: "Email required",
        description: "Please enter your email address to join the waitlist.",
        variant: "destructive"
      });
      return;
    }
    setIsSubmitting(true);
    try {
      const {
        error
      } = await supabase.from('waitlist_signups').insert([{
        email
      }]);
      if (error) {
        if (error.code === '23505') {
          // Unique constraint violation
          toast({
            title: "Already registered!",
            description: "This email is already on our waitlist. We'll be in touch soon!",
            variant: "destructive"
          });
        } else {
          throw error;
        }
      } else {
        toast({
          title: "🚀 You're on the list!",
          description: "We'll notify you when SkillSync is ready to transform your hiring process."
        });
      }
      setEmail('');
    } catch (error) {
      console.error('Error saving email:', error);
      toast({
        title: "Something went wrong",
        description: "Please try again in a moment.",
        variant: "destructive"
      });
      setEmail('');
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="flex flex-col items-center gap-6">
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
        <div className="relative flex-1">
          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
          <Input 
            type="email" 
            placeholder="Enter your email" 
            value={email} 
            onChange={e => setEmail(e.target.value)} 
            disabled={isSubmitting} 
            className="pl-10 bg-white border border-gray-300 text-gray-900 placeholder:text-gray-500 focus:border-purple-500 focus:ring-purple-500 shadow-sm"
          />
        </div>
        <Button 
          type="submit" 
          disabled={isSubmitting} 
          className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-2 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Joining...
            </>
          ) : 'Join Waitlist'}
        </Button>
      </form>
      <SignupCounter />
    </div>
  );
};

export default WaitlistForm;