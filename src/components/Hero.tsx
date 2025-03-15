
import { Button } from "@/components/ui/button";
import { ShieldCheck, Lock, KeyRound } from "lucide-react";

const Hero = () => {
  return (
    <div className="overflow-hidden py-20 sm:py-32 lg:pb-32 xl:pb-36 encrypted-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-20">
          <div className="relative z-10 mx-auto max-w-2xl lg:col-span-7 lg:max-w-none lg:pt-6 xl:col-span-6">
            <div className="relative">
              <p className="inline-flex items-center space-x-2 rounded-full bg-indigo-50 px-4 py-1 text-sm font-medium text-indigo-700 ring-1 ring-inset ring-indigo-600/20">
                <Lock className="h-4 w-4" />
                <span>End-to-End Encrypted</span>
              </p>
              <h1 className="mt-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
                Private Notes{' '}
                <span className="gradient-text">Protected by Design</span>
              </h1>
              <p className="mt-6 text-lg text-muted-foreground">
                Your notes, secured with military-grade encryption. Not even we can read your content – privacy isn't just a feature, it's our foundation.
              </p>
              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-4">
                <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700">
                  Get Started Free
                </Button>
                <Button size="lg" variant="outline" className="border-indigo-200 text-indigo-600 hover:bg-indigo-50">
                  Learn how it works
                </Button>
              </div>
              <div className="mt-10 grid grid-cols-1 gap-y-6 sm:grid-cols-3 sm:gap-x-6">
                {[
                  { icon: ShieldCheck, title: "RSA Encryption", description: "Your notes are encrypted and only you have the key" },
                  { icon: Lock, title: "Zero Knowledge", description: "We can't see your data, even if we wanted to" },
                  { icon: KeyRound, title: "Secure Identity", description: "Your identity is protected with one-way encryption" }
                ].map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="flex h-10 w-10 items-center justify-center rounded-md bg-indigo-600">
                        <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <p className="text-base font-medium text-foreground">{feature.title}</p>
                      <p className="mt-1 text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="relative mt-10 sm:mt-20 lg:col-span-5 lg:row-span-2 lg:mt-0 xl:col-span-6">
            <div className="absolute -top-64 -right-64 opacity-50 transform rotate-[30deg]">
              <div className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-indigo-500 to-indigo-300 opacity-20 blur-3xl"></div>
            </div>
            <div className="relative mx-auto bg-white shadow-xl rounded-2xl border border-indigo-100 p-8 indigo-glow">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-indigo-200 via-indigo-100 to-white opacity-10"></div>
              <div className="relative flex flex-col gap-6">
                <div className="flex items-center justify-between">
                  <div className="h-3 w-3 rounded-full bg-indigo-400"></div>
                  <div className="h-3 w-32 rounded-full bg-indigo-100"></div>
                  <div className="h-3 w-3 rounded-full bg-indigo-400"></div>
                </div>
                <div className="h-28 rounded-md bg-gradient-to-r from-indigo-50 to-white p-4">
                  <div className="h-3 w-1/2 rounded-full bg-indigo-200"></div>
                  <div className="mt-3 h-3 w-3/4 rounded-full bg-indigo-100"></div>
                  <div className="mt-3 h-3 w-2/3 rounded-full bg-indigo-100"></div>
                </div>
                <div className="h-28 rounded-md bg-gradient-to-r from-indigo-50 to-white p-4">
                  <div className="h-3 w-1/3 rounded-full bg-indigo-200"></div>
                  <div className="mt-3 h-3 w-2/3 rounded-full bg-indigo-100"></div>
                  <div className="mt-3 h-3 w-1/2 rounded-full bg-indigo-100"></div>
                </div>
                <div className="flex justify-end">
                  <div className="h-9 w-24 rounded-md bg-indigo-600"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
