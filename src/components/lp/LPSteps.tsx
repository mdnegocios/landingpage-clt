interface Step {
  number: string;
  title: string;
  description: string;
}

interface LPStepsProps {
  title: string;
  steps: Step[];
}

const LPSteps = ({ title, steps }: LPStepsProps) => {
  return (
    <section className="py-20 md:py-28 hero-gradient">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground text-center mb-16">
          {title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="text-center">
              <div className="w-16 h-16 rounded-full cta-gradient flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-accent-foreground shadow-lg">
                {step.number}
              </div>
              <h3 className="text-xl font-bold text-primary-foreground mb-3">{step.title}</h3>
              <p className="text-primary-foreground/70 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LPSteps;
