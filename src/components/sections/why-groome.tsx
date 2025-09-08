import { Receipt, Shield, Wrench } from 'lucide-react'

export const WhyGroome = () => {
  return (
    <section className="py-20 bg-light-gray">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Features */}
          <div>
            <h2 className="text-4xl font-bold text-dark-gray mb-12">
              Why Groome?
            </h2>
            
            <div className="space-y-8">
              {/* Transparent pricing */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange-accent rounded-lg flex items-center justify-center flex-shrink-0">
                  <Receipt className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-dark-gray mb-2">
                    Transparent pricing
                  </h3>
                  <p className="text-medium-gray">
                    You know how much you will pay even before you book. No hidden charges.
                  </p>
                </div>
              </div>

              {/* Experts only */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange-accent rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-dark-gray mb-2">
                    Experts only
                  </h3>
                  <p className="text-medium-gray">
                    Our professionals are well trained and have on-job expertise.
                  </p>
                </div>
              </div>

              {/* Fully equipped */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange-accent rounded-lg flex items-center justify-center flex-shrink-0">
                  <Wrench className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-dark-gray mb-2">
                    Fully equipped
                  </h3>
                  <p className="text-medium-gray">
                    We bring everything needed to get the job done well.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Quality Assured */}
          <div className="text-center">
            <div className="inline-flex flex-col items-center justify-center w-64 h-64 bg-blue-accent rounded-full mb-6 mx-auto">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-4">
                <Shield className="w-10 h-10 text-blue-accent" />
              </div>
              <div className="text-white">
                <div className="text-3xl font-bold mb-1">100%</div>
                <div className="text-lg font-semibold">Quality Assured</div>
              </div>
            </div>
            <p className="text-medium-gray text-lg">
              If you don't love our service, we will make it right.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}