
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const PricingTier = ({ name, description, price, features, isPopular = false, buttonText = "Start free trial" }) => (
  <div className={`rounded-2xl p-8 ring-1 ring-indigo-200 xl:p-10 ${isPopular ? 'bg-indigo-600 text-white ring-indigo-600' : 'bg-white'}`}>
    <div className="flex items-center justify-between gap-x-4">
      <h3 className={`text-lg font-semibold leading-8 ${isPopular ? 'text-white' : 'text-indigo-600'}`}>{name}</h3>
      {isPopular && (
        <p className="rounded-full bg-indigo-100 px-2.5 py-1 text-xs font-semibold leading-5 text-indigo-600">Most popular</p>
      )}
    </div>
    <p className={`mt-4 text-sm leading-6 ${isPopular ? 'text-indigo-100' : 'text-gray-600'}`}>{description}</p>
    <p className="mt-6 flex items-baseline gap-x-1">
      <span className={`text-4xl font-bold tracking-tight ${isPopular ? 'text-white' : 'text-gray-900'}`}>{price}</span>
      {price !== "Free" && <span className={`text-sm font-semibold leading-6 ${isPopular ? 'text-indigo-100' : 'text-gray-600'}`}>/month</span>}
    </p>
    <Button
      className={`mt-6 w-full ${
        isPopular
          ? 'bg-white text-indigo-600 hover:bg-indigo-50'
          : 'bg-indigo-600 text-white hover:bg-indigo-700'
      }`}
    >
      {buttonText}
    </Button>
    <ul className={`mt-8 space-y-3 text-sm leading-6 ${isPopular ? 'text-indigo-100' : 'text-gray-600'}`}>
      {features.map((feature, index) => (
        <li key={index} className="flex gap-x-3">
          <Check className={`h-6 w-5 flex-none ${isPopular ? 'text-white' : 'text-indigo-600'}`} aria-hidden="true" />
          {feature}
        </li>
      ))}
    </ul>
  </div>
);

const Pricing = () => {
  const [frequency] = useState("monthly");

  return (
    <div id="pricing" className="py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Pricing</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Simple pricing for everyone
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Whether you're just getting started or need more storage, we have a plan for you.
          </p>
        </div>
        
        <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-10 sm:mt-20 md:max-w-5xl md:grid-cols-3">
          <PricingTier
            name="Basic"
            description="All you need to get started with secure note-taking."
            price="Free"
            buttonText="Sign up for free"
            features={[
              "Up to 100 private notes",
              "End-to-end encryption",
              "Sync across 2 devices",
              "Basic search functionality",
              "Standard support"
            ]}
          />
          
          <PricingTier
            name="Pro"
            description="Perfect for professionals who need more storage and features."
            price={frequency === "monthly" ? "$9.99" : "$99"}
            isPopular={true}
            features={[
              "Unlimited private notes",
              "End-to-end encryption",
              "Sync across unlimited devices",
              "Advanced search functionality",
              "Priority support",
              "Custom categories and tags",
              "Document attachments"
            ]}
          />
          
          <PricingTier
            name="Enterprise"
            description="For organizations with advanced security requirements."
            price="Custom"
            buttonText="Contact sales"
            features={[
              "Everything in Pro",
              "Custom data retention policies",
              "User management dashboard",
              "Advanced audit logging",
              "Dedicated support engineer",
              "Custom integration options",
              "Self-hosting option"
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default Pricing;
