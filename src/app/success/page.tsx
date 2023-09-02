import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

function Success() {
  return (
    <div className="flex flex-col space-y-2 items-start lg:w-1/2 m-auto">
      <Link href="/">
        <Button
          variant="ghost"
          className="hover:bg-indigo-600 hover:text-inherit mb-2"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>
      </Link>
      <h3 className="text-xl font-bold font-size">Purchase successful</h3>
      <p>Thank you for your purchase! 🎉</p>
    </div>
  );
}

export default Success;
