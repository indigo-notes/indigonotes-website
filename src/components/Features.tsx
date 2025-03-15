
import { Shield, Lock, FileText, RefreshCw, Search, UserX } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: FileText,
      title: "100 Free Notes",
      description: "Store up to 100 notes completely free with our generous free tier."
    },
    {
      icon: Lock,
      title: "End-to-End Encryption",
      description: "Your notes are encrypted with RSA before they leave your device. Only you can read them."
    },
    {
      icon: UserX,
      title: "Anonymous Identity",
      description: "One-way hashing means we can authenticate you without knowing who you are."
    },
    {
      icon: RefreshCw,
      title: "Automatic Synchronization",
      description: "Your notes synchronize automatically across all your devices."
    },
    {
      icon: Shield,
      title: "Row-Level Security",
      description: "Supabase RLS ensures that users can only access their own data."
    },
    {
      icon: Search,
      title: "Searchable While Encrypted",
      description: "Search your notes without ever decrypting them on our servers."
    }
  ];

  return (
    <div id="features" className="py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Everything you need</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Privacy-First Note Taking</p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Your notes stay private with our advanced security architecture, while remaining easy to use.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <div className="h-10 w-10 flex-none rounded-lg bg-indigo-600 flex items-center justify-center">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.title}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Features;
