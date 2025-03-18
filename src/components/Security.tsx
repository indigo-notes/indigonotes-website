
import { LockKeyhole, Server, Database, UserCheck, Shield, AlertTriangle } from "lucide-react";

const SecurityStep = ({ icon: Icon, title, description, color = "indigo" }) => (
  <div className="relative pb-12">
    <div className={`absolute left-5 top-5 -ml-px mt-0.5 h-full w-0.5 bg-${color}-200`} aria-hidden="true" />
    <div className="relative flex items-start group">
      <span className="flex h-9 items-center">
        <span className={`flex h-10 w-10 items-center justify-center rounded-full bg-${color}-600 group-hover:bg-${color}-700 transition-colors`}>
          <Icon className="h-5 w-5 text-white" aria-hidden="true" />
        </span>
      </span>
      <div className="ml-4 flex-1">
        <h3 className="text-lg font-medium text-gray-900 group-hover:text-indigo-600 transition-colors">{title}</h3>
        <p className="mt-2 text-sm text-gray-500">{description}</p>
      </div>
    </div>
  </div>
);

const SecurityHighlight = ({ icon: Icon, title, description }) => (
  <div className="relative bg-white p-6 rounded-xl shadow-sm border border-indigo-100 hover:shadow-md transition-all hover:-translate-y-1">
    <div className="absolute -top-3 -left-3">
      <div className="h-10 w-10 rounded-full bg-indigo-600 flex items-center justify-center">
        <Icon className="h-5 w-5 text-white" aria-hidden="true" />
      </div>
    </div>
    <div className="pt-4 pl-4">
      <h3 className="text-lg font-medium text-gray-900">{title}</h3>
      <p className="mt-2 text-sm text-gray-600">{description}</p>
    </div>
  </div>
);

const Security = () => {
  return (
    <div id="security" className="py-24 sm:py-32 bg-gradient-to-b from-white to-indigo-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">High-level security</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            How Your Data Stays Private
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We've engineered our system from the ground up to ensure your data remains private, even from us.
          </p>
        </div>
        
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h3 className="text-2xl font-bold tracking-tight text-gray-900">Nothing to compromise</h3>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Our zero-knowledge architecture means that even if our servers were compromised, your data would remain secure and private.
              </p>
              
              <div className="mt-10">
                <SecurityStep
                  icon={UserCheck}
                  title="Your identity is hashed"
                  description="We don't store your actual username, password, or email - just secure one-way hashes."
                />
                <SecurityStep
                  icon={LockKeyhole}
                  title="RSA encryption at rest"
                  description="Notes are encrypted with RSA before they ever leave your device."
                />
                <SecurityStep
                  icon={Database}
                  title="Row-level security"
                  description="Supabase RLS ensures each user can only access their own data at the database level."
                />
                <SecurityStep
                  icon={Server}
                  title="Secure API endpoints"
                  description="Our Gradio+FastAPI backend validates all requests and enforces strict security policies."
                  color="indigo"
                />
              </div>
            </div>
          </div>
          
          <div className="lg:order-first lg:row-span-2">
            <div className="rounded-2xl overflow-hidden indigo-glow relative">
              <div className="absolute -z-10 inset-0 bg-gradient-to-tr from-indigo-700 to-indigo-500 opacity-10"></div>
              <div className="p-8">
                <h3 className="text-2xl font-bold tracking-tight text-gray-900">Security by design</h3>
                <p className="mt-6 text-lg text-gray-600">
                  Our security approach isn't just a feature - it's fundamental to how our product functions.
                </p>
                
                <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
                  <SecurityHighlight
                    icon={Shield}
                    title="Zero knowledge"
                    description="We can't access your personal data, even under legal compulsion, because we simply don't have the keys."
                  />
                  <SecurityHighlight
                    icon={AlertTriangle}
                    title="No backdoors"
                    description="Our code is designed with no encryption backdoors - not even for us."
                  />
                </div>
                
                <div className="mt-10 flex justify-center">
                  <div className="relative overflow-hidden rounded-xl bg-white shadow-md border border-indigo-50 p-8 text-center w-full max-w-md">
                    <div className="relative z-10">
                      <h3 className="text-xl font-semibold">Want to verify our claims?</h3>
                      <p className="mt-2 text-gray-600 text-sm">
                        We're fully transparent about our security architecture.
                      </p>
                      <a href="https://drive.google.com/file/d/1wGJru64vIsCr5fMgduHju7-UZwJ_BnJS/view?usp=sharing">
                        <button
                          type="button"
                          className="mt-6 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                          Read our Privacy Policy
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Security;
