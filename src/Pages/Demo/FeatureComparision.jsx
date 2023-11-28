const FeatureComparision = () => {
  return (
    <div>
      {/* Feature comparison */}
      <section
        aria-labelledby="mobile-comparison-heading"
        className="lg:hidden">
        <h2 id="mobile-comparison-heading" className="sr-only">
          Feature comparison
        </h2>
        <div className="mx-auto mt-16 max-w-2xl space-y-16 px-6">
          <div className="border-t border-gray-200">
            <div className="border-transparent -mt-px pt-6 border-t-2 sm:w-1/2">
              <h3 className="text-gray-900 text-sm font-bold">Starter</h3>
              <p className="mt-2 text-sm text-gray-500">
                All your essential business finances, taken care of.
              </p>
            </div>
            <h4 className="mt-10 text-sm font-bold text-gray-900">
              Catered for business
            </h4>
            <div className="relative mt-6">
              {/* Fake card background */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 hidden sm:block">
                <div className="shadow absolute right-0 w-1/2 h-full bg-white rounded-lg" />
              </div>
              <div className="ring-1 ring-black ring-opacity-5 shadow relative py-3 px-4 bg-white rounded-lg sm:p-0 sm:bg-transparent sm:rounded-none sm:ring-0 sm:shadow-none">
                <dl className="divide-y divide-gray-200">
                  <div className="flex items-center justify-between py-3 sm:grid sm:grid-cols-2">
                    <dt className="pr-4 text-sm font-medium text-gray-600">
                      Tax Savings
                    </dt>
                    <dd className="flex items-center justify-end sm:justify-center sm:px-4">
                      <svg
                        className="mx-auto h-5 w-5 text-indigo-600"
                        x-description="Heroicon name: mini/check"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true">
                        <path
                          fillRule="evenodd"
                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="sr-only">Yes</span>
                    </dd>
                  </div>
                  <div className="flex items-center justify-between py-3 sm:grid sm:grid-cols-2">
                    <dt className="pr-4 text-sm font-medium text-gray-600">
                      Easy to use accounting
                    </dt>
                    <dd className="flex items-center justify-end sm:justify-center sm:px-4">
                      <svg
                        className="mx-auto h-5 w-5 text-indigo-600"
                        x-description="Heroicon name: mini/check"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true">
                        <path
                          fillRule="evenodd"
                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="sr-only">Yes</span>
                    </dd>
                  </div>
                  <div className="flex items-center justify-between py-3 sm:grid sm:grid-cols-2">
                    <dt className="pr-4 text-sm font-medium text-gray-600">
                      Multi-accounts
                    </dt>
                    <dd className="flex items-center justify-end sm:justify-center sm:px-4">
                      <span className="text-gray-900 text-sm font-medium">
                        3 accounts
                      </span>
                    </dd>
                  </div>
                  <div className="flex items-center justify-between py-3 sm:grid sm:grid-cols-2">
                    <dt className="pr-4 text-sm font-medium text-gray-600">
                      Invoicing
                    </dt>
                    <dd className="flex items-center justify-end sm:justify-center sm:px-4">
                      <span className="text-gray-900 text-sm font-medium">
                        3 invoices
                      </span>
                    </dd>
                  </div>
                  <div className="flex items-center justify-between py-3 sm:grid sm:grid-cols-2">
                    <dt className="pr-4 text-sm font-medium text-gray-600">
                      Exclusive offers
                    </dt>
                    <dd className="flex items-center justify-end sm:justify-center sm:px-4">
                      <svg
                        className="mx-auto h-5 w-5 text-gray-400"
                        x-description="Heroicon name: mini/x-mark"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true">
                        <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                      </svg>
                      <span className="sr-only">No</span>
                    </dd>
                  </div>
                  <div className="flex items-center justify-between py-3 sm:grid sm:grid-cols-2">
                    <dt className="pr-4 text-sm font-medium text-gray-600">
                      6 months free advisor
                    </dt>
                    <dd className="flex items-center justify-end sm:justify-center sm:px-4">
                      <svg
                        className="mx-auto h-5 w-5 text-gray-400"
                        x-description="Heroicon name: mini/x-mark"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true">
                        <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                      </svg>
                      <span className="sr-only">No</span>
                    </dd>
                  </div>
                  <div className="flex items-center justify-between py-3 sm:grid sm:grid-cols-2">
                    <dt className="pr-4 text-sm font-medium text-gray-600">
                      Mobile and web access
                    </dt>
                    <dd className="flex items-center justify-end sm:justify-center sm:px-4">
                      <svg
                        className="mx-auto h-5 w-5 text-gray-400"
                        x-description="Heroicon name: mini/x-mark"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true">
                        <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                      </svg>
                      <span className="sr-only">No</span>
                    </dd>
                  </div>
                </dl>
              </div>
              {/* Fake card border */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 hidden sm:block">
                <div className="ring-1 ring-black ring-opacity-5 absolute right-0 w-1/2 h-full rounded-lg" />
              </div>
            </div>
            <h4 className="mt-10 text-sm font-bold text-gray-900">
              Other perks
            </h4>
            <div className="relative mt-6">
              {/* Fake card background */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 hidden sm:block">
                <div className="shadow absolute right-0 w-1/2 h-full bg-white rounded-lg" />
              </div>
              <div className="ring-1 ring-black ring-opacity-5 shadow relative py-3 px-4 bg-white rounded-lg sm:p-0 sm:bg-transparent sm:rounded-none sm:ring-0 sm:shadow-none">
                <dl className="divide-y divide-gray-200">
                  <div className="flex justify-between py-3 sm:grid sm:grid-cols-2">
                    <dt className="text-sm font-medium text-gray-600 sm:pr-4">
                      24/7 customer support
                    </dt>
                    <dd className="text-center sm:px-4">
                      <svg
                        className="mx-auto h-5 w-5 text-indigo-600"
                        x-description="Heroicon name: mini/check"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true">
                        <path
                          fillRule="evenodd"
                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="sr-only">Yes</span>
                    </dd>
                  </div>
                  <div className="flex justify-between py-3 sm:grid sm:grid-cols-2">
                    <dt className="text-sm font-medium text-gray-600 sm:pr-4">
                      Instant notifications
                    </dt>
                    <dd className="text-center sm:px-4">
                      <svg
                        className="mx-auto h-5 w-5 text-indigo-600"
                        x-description="Heroicon name: mini/check"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true">
                        <path
                          fillRule="evenodd"
                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="sr-only">Yes</span>
                    </dd>
                  </div>
                  <div className="flex justify-between py-3 sm:grid sm:grid-cols-2">
                    <dt className="text-sm font-medium text-gray-600 sm:pr-4">
                      Budgeting tools
                    </dt>
                    <dd className="text-center sm:px-4">
                      <svg
                        className="mx-auto h-5 w-5 text-indigo-600"
                        x-description="Heroicon name: mini/check"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true">
                        <path
                          fillRule="evenodd"
                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="sr-only">Yes</span>
                    </dd>
                  </div>
                  <div className="flex justify-between py-3 sm:grid sm:grid-cols-2">
                    <dt className="text-sm font-medium text-gray-600 sm:pr-4">
                      Digital receipts
                    </dt>
                    <dd className="text-center sm:px-4">
                      <svg
                        className="mx-auto h-5 w-5 text-indigo-600"
                        x-description="Heroicon name: mini/check"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true">
                        <path
                          fillRule="evenodd"
                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="sr-only">Yes</span>
                    </dd>
                  </div>
                  <div className="flex justify-between py-3 sm:grid sm:grid-cols-2">
                    <dt className="text-sm font-medium text-gray-600 sm:pr-4">
                      Pots to separate money
                    </dt>
                    <dd className="text-center sm:px-4">
                      <svg
                        className="mx-auto h-5 w-5 text-gray-400"
                        x-description="Heroicon name: mini/x-mark"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true">
                        <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                      </svg>
                      <span className="sr-only">No</span>
                    </dd>
                  </div>
                  <div className="flex justify-between py-3 sm:grid sm:grid-cols-2">
                    <dt className="text-sm font-medium text-gray-600 sm:pr-4">
                      Free bank transfers
                    </dt>
                    <dd className="text-center sm:px-4">
                      <svg
                        className="mx-auto h-5 w-5 text-gray-400"
                        x-description="Heroicon name: mini/x-mark"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true">
                        <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                      </svg>
                      <span className="sr-only">No</span>
                    </dd>
                  </div>
                  <div className="flex justify-between py-3 sm:grid sm:grid-cols-2">
                    <dt className="text-sm font-medium text-gray-600 sm:pr-4">
                      Business debit card
                    </dt>
                    <dd className="text-center sm:px-4">
                      <svg
                        className="mx-auto h-5 w-5 text-gray-400"
                        x-description="Heroicon name: mini/x-mark"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true">
                        <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                      </svg>
                      <span className="sr-only">No</span>
                    </dd>
                  </div>
                </dl>
              </div>
              {/* Fake card border */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 hidden sm:block">
                <div className="ring-1 ring-black ring-opacity-5 absolute right-0 w-1/2 h-full rounded-lg" />
              </div>
            </div>
          </div>
          <div className="border-t border-gray-200">
            <div className="border-indigo-600 -mt-px pt-6 border-t-2 sm:w-1/2">
              <h3 className="text-indigo-600 text-sm font-bold">Scale</h3>
              <p className="mt-2 text-sm text-gray-500">
                The best financial services for your thriving business.
              </p>
            </div>
            <h4 className="mt-10 text-sm font-bold text-gray-900">
              Catered for business
            </h4>
            <div className="relative mt-6">
              {/* Fake card background */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 hidden sm:block">
                <div className="shadow-md absolute right-0 w-1/2 h-full bg-white rounded-lg" />
              </div>
              <div className="ring-2 ring-indigo-600 shadow-md relative py-3 px-4 bg-white rounded-lg sm:p-0 sm:bg-transparent sm:rounded-none sm:ring-0 sm:shadow-none">
                <dl className="divide-y divide-gray-200">
                  <div className="flex items-center justify-between py-3 sm:grid sm:grid-cols-2">
                    <dt className="pr-4 text-sm font-medium text-gray-600">
                      Tax Savings
                    </dt>
                    <dd className="flex items-center justify-end sm:justify-center sm:px-4">
                      <svg
                        className="mx-auto h-5 w-5 text-indigo-600"
                        x-description="Heroicon name: mini/check"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true">
                        <path
                          fillRule="evenodd"
                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="sr-only">Yes</span>
                    </dd>
                  </div>
                  <div className="flex items-center justify-between py-3 sm:grid sm:grid-cols-2">
                    <dt className="pr-4 text-sm font-medium text-gray-600">
                      Easy to use accounting
                    </dt>
                    <dd className="flex items-center justify-end sm:justify-center sm:px-4">
                      <svg
                        className="mx-auto h-5 w-5 text-indigo-600"
                        x-description="Heroicon name: mini/check"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true">
                        <path
                          fillRule="evenodd"
                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="sr-only">Yes</span>
                    </dd>
                  </div>
                  <div className="flex items-center justify-between py-3 sm:grid sm:grid-cols-2">
                    <dt className="pr-4 text-sm font-medium text-gray-600">
                      Multi-accounts
                    </dt>
                    <dd className="flex items-center justify-end sm:justify-center sm:px-4">
                      <span className="text-indigo-600 text-sm font-medium">
                        Unlimited accounts
                      </span>
                    </dd>
                  </div>
                  <div className="flex items-center justify-between py-3 sm:grid sm:grid-cols-2">
                    <dt className="pr-4 text-sm font-medium text-gray-600">
                      Invoicing
                    </dt>
                    <dd className="flex items-center justify-end sm:justify-center sm:px-4">
                      <span className="text-indigo-600 text-sm font-medium">
                        Unlimited invoices
                      </span>
                    </dd>
                  </div>
                  <div className="flex items-center justify-between py-3 sm:grid sm:grid-cols-2">
                    <dt className="pr-4 text-sm font-medium text-gray-600">
                      Exclusive offers
                    </dt>
                    <dd className="flex items-center justify-end sm:justify-center sm:px-4">
                      <svg
                        className="mx-auto h-5 w-5 text-indigo-600"
                        x-description="Heroicon name: mini/check"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true">
                        <path
                          fillRule="evenodd"
                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="sr-only">Yes</span>
                    </dd>
                  </div>
                  <div className="flex items-center justify-between py-3 sm:grid sm:grid-cols-2">
                    <dt className="pr-4 text-sm font-medium text-gray-600">
                      6 months free advisor
                    </dt>
                    <dd className="flex items-center justify-end sm:justify-center sm:px-4">
                      <svg
                        className="mx-auto h-5 w-5 text-indigo-600"
                        x-description="Heroicon name: mini/check"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true">
                        <path
                          fillRule="evenodd"
                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="sr-only">Yes</span>
                    </dd>
                  </div>
                  <div className="flex items-center justify-between py-3 sm:grid sm:grid-cols-2">
                    <dt className="pr-4 text-sm font-medium text-gray-600">
                      Mobile and web access
                    </dt>
                    <dd className="flex items-center justify-end sm:justify-center sm:px-4">
                      <svg
                        className="mx-auto h-5 w-5 text-indigo-600"
                        x-description="Heroicon name: mini/check"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true">
                        <path
                          fillRule="evenodd"
                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="sr-only">Yes</span>
                    </dd>
                  </div>
                </dl>
              </div>
              {/* Fake card border */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 hidden sm:block">
                <div className="ring-2 ring-indigo-600 absolute right-0 w-1/2 h-full rounded-lg" />
              </div>
            </div>
            <h4 className="mt-10 text-sm font-bold text-gray-900">
              Other perks
            </h4>
            <div className="relative mt-6">
              {/* Fake card background */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 hidden sm:block">
                <div className="shadow-md absolute right-0 w-1/2 h-full bg-white rounded-lg" />
              </div>
              <div className="ring-2 ring-indigo-600 shadow-md relative py-3 px-4 bg-white rounded-lg sm:p-0 sm:bg-transparent sm:rounded-none sm:ring-0 sm:shadow-none">
                <dl className="divide-y divide-gray-200">
                  <div className="flex justify-between py-3 sm:grid sm:grid-cols-2">
                    <dt className="text-sm font-medium text-gray-600 sm:pr-4">
                      24/7 customer support
                    </dt>
                    <dd className="text-center sm:px-4">
                      <svg
                        className="mx-auto h-5 w-5 text-indigo-600"
                        x-description="Heroicon name: mini/check"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true">
                        <path
                          fillRule="evenodd"
                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="sr-only">Yes</span>
                    </dd>
                  </div>
                  <div className="flex justify-between py-3 sm:grid sm:grid-cols-2">
                    <dt className="text-sm font-medium text-gray-600 sm:pr-4">
                      Instant notifications
                    </dt>
                    <dd className="text-center sm:px-4">
                      <svg
                        className="mx-auto h-5 w-5 text-indigo-600"
                        x-description="Heroicon name: mini/check"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true">
                        <path
                          fillRule="evenodd"
                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="sr-only">Yes</span>
                    </dd>
                  </div>
                  <div className="flex justify-between py-3 sm:grid sm:grid-cols-2">
                    <dt className="text-sm font-medium text-gray-600 sm:pr-4">
                      Budgeting tools
                    </dt>
                    <dd className="text-center sm:px-4">
                      <svg
                        className="mx-auto h-5 w-5 text-indigo-600"
                        x-description="Heroicon name: mini/check"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true">
                        <path
                          fillRule="evenodd"
                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="sr-only">Yes</span>
                    </dd>
                  </div>
                  <div className="flex justify-between py-3 sm:grid sm:grid-cols-2">
                    <dt className="text-sm font-medium text-gray-600 sm:pr-4">
                      Digital receipts
                    </dt>
                    <dd className="text-center sm:px-4">
                      <svg
                        className="mx-auto h-5 w-5 text-indigo-600"
                        x-description="Heroicon name: mini/check"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true">
                        <path
                          fillRule="evenodd"
                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="sr-only">Yes</span>
                    </dd>
                  </div>
                  <div className="flex justify-between py-3 sm:grid sm:grid-cols-2">
                    <dt className="text-sm font-medium text-gray-600 sm:pr-4">
                      Pots to separate money
                    </dt>
                    <dd className="text-center sm:px-4">
                      <svg
                        className="mx-auto h-5 w-5 text-indigo-600"
                        x-description="Heroicon name: mini/check"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true">
                        <path
                          fillRule="evenodd"
                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="sr-only">Yes</span>
                    </dd>
                  </div>
                  <div className="flex justify-between py-3 sm:grid sm:grid-cols-2">
                    <dt className="text-sm font-medium text-gray-600 sm:pr-4">
                      Free bank transfers
                    </dt>
                    <dd className="text-center sm:px-4">
                      <svg
                        className="mx-auto h-5 w-5 text-indigo-600"
                        x-description="Heroicon name: mini/check"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true">
                        <path
                          fillRule="evenodd"
                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="sr-only">Yes</span>
                    </dd>
                  </div>
                  <div className="flex justify-between py-3 sm:grid sm:grid-cols-2">
                    <dt className="text-sm font-medium text-gray-600 sm:pr-4">
                      Business debit card
                    </dt>
                    <dd className="text-center sm:px-4">
                      <svg
                        className="mx-auto h-5 w-5 text-indigo-600"
                        x-description="Heroicon name: mini/check"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true">
                        <path
                          fillRule="evenodd"
                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="sr-only">Yes</span>
                    </dd>
                  </div>
                </dl>
              </div>
              {/* Fake card border */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 hidden sm:block">
                <div className="ring-2 ring-indigo-600 absolute right-0 w-1/2 h-full rounded-lg" />
              </div>
            </div>
          </div>
          <div className="border-t border-gray-200">
            <div className="border-transparent -mt-px pt-6 border-t-2 sm:w-1/2">
              <h3 className="text-gray-900 text-sm font-bold">Growth</h3>
              <p className="mt-2 text-sm text-gray-500">
                Convenient features to take your business to the next level.
              </p>
            </div>
            <h4 className="mt-10 text-sm font-bold text-gray-900">
              Catered for business
            </h4>
            <div className="relative mt-6">
              {/* Fake card background */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 hidden sm:block">
                <div className="shadow absolute right-0 w-1/2 h-full bg-white rounded-lg" />
              </div>
              <div className="ring-1 ring-black ring-opacity-5 shadow relative py-3 px-4 bg-white rounded-lg sm:p-0 sm:bg-transparent sm:rounded-none sm:ring-0 sm:shadow-none">
                <dl className="divide-y divide-gray-200">
                  <div className="flex items-center justify-between py-3 sm:grid sm:grid-cols-2">
                    <dt className="pr-4 text-sm font-medium text-gray-600">
                      Tax Savings
                    </dt>
                    <dd className="flex items-center justify-end sm:justify-center sm:px-4">
                      <svg
                        className="mx-auto h-5 w-5 text-indigo-600"
                        x-description="Heroicon name: mini/check"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true">
                        <path
                          fillRule="evenodd"
                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="sr-only">Yes</span>
                    </dd>
                  </div>
                  <div className="flex items-center justify-between py-3 sm:grid sm:grid-cols-2">
                    <dt className="pr-4 text-sm font-medium text-gray-600">
                      Easy to use accounting
                    </dt>
                    <dd className="flex items-center justify-end sm:justify-center sm:px-4">
                      <svg
                        className="mx-auto h-5 w-5 text-indigo-600"
                        x-description="Heroicon name: mini/check"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true">
                        <path
                          fillRule="evenodd"
                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="sr-only">Yes</span>
                    </dd>
                  </div>
                  <div className="flex items-center justify-between py-3 sm:grid sm:grid-cols-2">
                    <dt className="pr-4 text-sm font-medium text-gray-600">
                      Multi-accounts
                    </dt>
                    <dd className="flex items-center justify-end sm:justify-center sm:px-4">
                      <span className="text-gray-900 text-sm font-medium">
                        7 accounts
                      </span>
                    </dd>
                  </div>
                  <div className="flex items-center justify-between py-3 sm:grid sm:grid-cols-2">
                    <dt className="pr-4 text-sm font-medium text-gray-600">
                      Invoicing
                    </dt>
                    <dd className="flex items-center justify-end sm:justify-center sm:px-4">
                      <span className="text-gray-900 text-sm font-medium">
                        10 invoices
                      </span>
                    </dd>
                  </div>
                  <div className="flex items-center justify-between py-3 sm:grid sm:grid-cols-2">
                    <dt className="pr-4 text-sm font-medium text-gray-600">
                      Exclusive offers
                    </dt>
                    <dd className="flex items-center justify-end sm:justify-center sm:px-4">
                      <svg
                        className="mx-auto h-5 w-5 text-indigo-600"
                        x-description="Heroicon name: mini/check"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true">
                        <path
                          fillRule="evenodd"
                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="sr-only">Yes</span>
                    </dd>
                  </div>
                  <div className="flex items-center justify-between py-3 sm:grid sm:grid-cols-2">
                    <dt className="pr-4 text-sm font-medium text-gray-600">
                      6 months free advisor
                    </dt>
                    <dd className="flex items-center justify-end sm:justify-center sm:px-4">
                      <svg
                        className="mx-auto h-5 w-5 text-indigo-600"
                        x-description="Heroicon name: mini/check"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true">
                        <path
                          fillRule="evenodd"
                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="sr-only">Yes</span>
                    </dd>
                  </div>
                  <div className="flex items-center justify-between py-3 sm:grid sm:grid-cols-2">
                    <dt className="pr-4 text-sm font-medium text-gray-600">
                      Mobile and web access
                    </dt>
                    <dd className="flex items-center justify-end sm:justify-center sm:px-4">
                      <svg
                        className="mx-auto h-5 w-5 text-gray-400"
                        x-description="Heroicon name: mini/x-mark"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true">
                        <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                      </svg>
                      <span className="sr-only">No</span>
                    </dd>
                  </div>
                </dl>
              </div>
              {/* Fake card border */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 hidden sm:block">
                <div className="ring-1 ring-black ring-opacity-5 absolute right-0 w-1/2 h-full rounded-lg" />
              </div>
            </div>
            <h4 className="mt-10 text-sm font-bold text-gray-900">
              Other perks
            </h4>
            <div className="relative mt-6">
              {/* Fake card background */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 hidden sm:block">
                <div className="shadow absolute right-0 w-1/2 h-full bg-white rounded-lg" />
              </div>
              <div className="ring-1 ring-black ring-opacity-5 shadow relative py-3 px-4 bg-white rounded-lg sm:p-0 sm:bg-transparent sm:rounded-none sm:ring-0 sm:shadow-none">
                <dl className="divide-y divide-gray-200">
                  <div className="flex justify-between py-3 sm:grid sm:grid-cols-2">
                    <dt className="text-sm font-medium text-gray-600 sm:pr-4">
                      24/7 customer support
                    </dt>
                    <dd className="text-center sm:px-4">
                      <svg
                        className="mx-auto h-5 w-5 text-indigo-600"
                        x-description="Heroicon name: mini/check"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true">
                        <path
                          fillRule="evenodd"
                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="sr-only">Yes</span>
                    </dd>
                  </div>
                  <div className="flex justify-between py-3 sm:grid sm:grid-cols-2">
                    <dt className="text-sm font-medium text-gray-600 sm:pr-4">
                      Instant notifications
                    </dt>
                    <dd className="text-center sm:px-4">
                      <svg
                        className="mx-auto h-5 w-5 text-indigo-600"
                        x-description="Heroicon name: mini/check"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true">
                        <path
                          fillRule="evenodd"
                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="sr-only">Yes</span>
                    </dd>
                  </div>
                  <div className="flex justify-between py-3 sm:grid sm:grid-cols-2">
                    <dt className="text-sm font-medium text-gray-600 sm:pr-4">
                      Budgeting tools
                    </dt>
                    <dd className="text-center sm:px-4">
                      <svg
                        className="mx-auto h-5 w-5 text-indigo-600"
                        x-description="Heroicon name: mini/check"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true">
                        <path
                          fillRule="evenodd"
                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="sr-only">Yes</span>
                    </dd>
                  </div>
                  <div className="flex justify-between py-3 sm:grid sm:grid-cols-2">
                    <dt className="text-sm font-medium text-gray-600 sm:pr-4">
                      Digital receipts
                    </dt>
                    <dd className="text-center sm:px-4">
                      <svg
                        className="mx-auto h-5 w-5 text-indigo-600"
                        x-description="Heroicon name: mini/check"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true">
                        <path
                          fillRule="evenodd"
                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="sr-only">Yes</span>
                    </dd>
                  </div>
                  <div className="flex justify-between py-3 sm:grid sm:grid-cols-2">
                    <dt className="text-sm font-medium text-gray-600 sm:pr-4">
                      Pots to separate money
                    </dt>
                    <dd className="text-center sm:px-4">
                      <svg
                        className="mx-auto h-5 w-5 text-indigo-600"
                        x-description="Heroicon name: mini/check"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true">
                        <path
                          fillRule="evenodd"
                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="sr-only">Yes</span>
                    </dd>
                  </div>
                  <div className="flex justify-between py-3 sm:grid sm:grid-cols-2">
                    <dt className="text-sm font-medium text-gray-600 sm:pr-4">
                      Free bank transfers
                    </dt>
                    <dd className="text-center sm:px-4">
                      <svg
                        className="mx-auto h-5 w-5 text-gray-400"
                        x-description="Heroicon name: mini/x-mark"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true">
                        <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                      </svg>
                      <span className="sr-only">No</span>
                    </dd>
                  </div>
                  <div className="flex justify-between py-3 sm:grid sm:grid-cols-2">
                    <dt className="text-sm font-medium text-gray-600 sm:pr-4">
                      Business debit card
                    </dt>
                    <dd className="text-center sm:px-4">
                      <svg
                        className="mx-auto h-5 w-5 text-gray-400"
                        x-description="Heroicon name: mini/x-mark"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true">
                        <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                      </svg>
                      <span className="sr-only">No</span>
                    </dd>
                  </div>
                </dl>
              </div>
              {/* Fake card border */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 hidden sm:block">
                <div className="ring-1 ring-black ring-opacity-5 absolute right-0 w-1/2 h-full rounded-lg" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section aria-labelledby="comparison-heading" className="hidden lg:block">
        <h2 id="comparison-heading" className="sr-only">
          Feature comparison
        </h2>
        <div className="mx-auto mt-24 max-w-7xl px-8">
          <div className="flex w-full items-stretch border-t border-gray-200">
            <div className="-mt-px flex w-1/4 items-end py-6 pr-4">
              <h3 className="mt-auto text-sm font-bold text-gray-900">
                Catered for business
              </h3>
            </div>
            <div aria-hidden="true" className="pr-4 -mt-px pl-4 w-1/4">
              <div className="border-transparent py-6 border-t-2">
                <p className="text-gray-900 text-sm font-bold">Starter</p>
                <p className="mt-2 text-sm text-gray-500">
                  All your essential business finances, taken care of.
                </p>
              </div>
            </div>
            <div aria-hidden="true" className="pr-4 -mt-px pl-4 w-1/4">
              <div className="border-indigo-600 py-6 border-t-2">
                <p className="text-indigo-600 text-sm font-bold">Scale</p>
                <p className="mt-2 text-sm text-gray-500">
                  The best financial services for your thriving business.
                </p>
              </div>
            </div>
            <div aria-hidden="true" className=" -mt-px pl-4 w-1/4">
              <div className="border-transparent py-6 border-t-2">
                <p className="text-gray-900 text-sm font-bold">Growth</p>
                <p className="mt-2 text-sm text-gray-500">
                  Convenient features to take your business to the next level.
                </p>
              </div>
            </div>
          </div>
          <div className="relative">
            {/* Fake card backgrounds */}
            <div
              className="pointer-events-none absolute inset-0 flex items-stretch"
              aria-hidden="true">
              <div className="w-1/4 pr-4" />
              <div className="w-1/4 px-4">
                <div className="h-full w-full rounded-lg bg-white shadow" />
              </div>
              <div className="w-1/4 px-4">
                <div className="h-full w-full rounded-lg bg-white shadow-md" />
              </div>
              <div className="w-1/4 pl-4">
                <div className="h-full w-full rounded-lg bg-white shadow" />
              </div>
            </div>
            <table className="relative w-full">
              <caption className="sr-only">Business feature comparison</caption>
              <thead>
                <tr className="text-left">
                  <th scope="col">
                    <span className="sr-only">Feature</span>
                  </th>
                  <th scope="col">
                    <span className="sr-only">Starter plan</span>
                  </th>
                  <th scope="col">
                    <span className="sr-only">Scale plan</span>
                  </th>
                  <th scope="col">
                    <span className="sr-only">Growth plan</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr key="Tax Savings">
                  <th
                    scope="row"
                    className="w-1/4 py-3 pr-4 text-left text-sm font-medium text-gray-600">
                    Tax Savings
                  </th>
                  <td className="px-4 relative w-1/4 py-0 text-center">
                    <span className="relative h-full w-full py-3">
                      <svg
                        className="mx-auto h-5 w-5 text-indigo-600"
                        x-description="Heroicon name: mini/check"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true">
                        <path
                          fillRule="evenodd"
                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="sr-only">Yes</span>
                    </span>
                  </td>
                  <td className="px-4 relative w-1/4 py-0 text-center">
                    <span className="relative h-full w-full py-3">
                      <svg
                        className="mx-auto h-5 w-5 text-indigo-600"
                        x-description="Heroicon name: mini/check"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true">
                        <path
                          fillRule="evenodd"
                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="sr-only">Yes</span>
                    </span>
                  </td>
                  <td className="pl-4 relative w-1/4 py-0 text-center">
                    <span className="relative h-full w-full py-3">
                      <svg
                        className="mx-auto h-5 w-5 text-indigo-600"
                        x-description="Heroicon name: mini/check"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true">
                        <path
                          fillRule="evenodd"
                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="sr-only">Yes</span>
                    </span>
                  </td>
                </tr>
                <tr key="Easy to use accounting">
                  <th
                    scope="row"
                    className="w-1/4 py-3 pr-4 text-left text-sm font-medium text-gray-600">
                    Easy to use accounting
                  </th>
                  <td className="px-4 relative w-1/4 py-0 text-center">
                    <span className="relative h-full w-full py-3">
                      <svg
                        className="mx-auto h-5 w-5 text-indigo-600"
                        x-description="Heroicon name: mini/check"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true">
                        <path
                          fillRule="evenodd"
                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="sr-only">Yes</span>
                    </span>
                  </td>
                  <td className="px-4 relative w-1/4 py-0 text-center">
                    <span className="relative h-full w-full py-3">
                      <svg
                        className="mx-auto h-5 w-5 text-indigo-600"
                        x-description="Heroicon name: mini/check"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true">
                        <path
                          fillRule="evenodd"
                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="sr-only">Yes</span>
                    </span>
                  </td>
                  <td className="pl-4 relative w-1/4 py-0 text-center">
                    <span className="relative h-full w-full py-3">
                      <svg
                        className="mx-auto h-5 w-5 text-indigo-600"
                        x-description="Heroicon name: mini/check"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true">
                        <path
                          fillRule="evenodd"
                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="sr-only">Yes</span>
                    </span>
                  </td>
                </tr>
                <tr key="Multi-accounts">
                  <th
                    scope="row"
                    className="w-1/4 py-3 pr-4 text-left text-sm font-medium text-gray-600">
                    Multi-accounts
                  </th>
                  <td className="px-4 relative w-1/4 py-0 text-center">
                    <span className="relative h-full w-full py-3">
                      <span className="text-gray-900 text-sm font-medium">
                        3 accounts
                      </span>
                    </span>
                  </td>
                  <td className="px-4 relative w-1/4 py-0 text-center">
                    <span className="relative h-full w-full py-3">
                      <span className="text-indigo-600 text-sm font-medium">
                        Unlimited accounts
                      </span>
                    </span>
                  </td>
                  <td className="pl-4 relative w-1/4 py-0 text-center">
                    <span className="relative h-full w-full py-3">
                      <span className="text-gray-900 text-sm font-medium">
                        7 accounts
                      </span>
                    </span>
                  </td>
                </tr>
                <tr key="Invoicing">
                  <th
                    scope="row"
                    className="w-1/4 py-3 pr-4 text-left text-sm font-medium text-gray-600">
                    Invoicing
                  </th>
                  <td className="px-4 relative w-1/4 py-0 text-center">
                    <span className="relative h-full w-full py-3">
                      <span className="text-gray-900 text-sm font-medium">
                        3 invoices
                      </span>
                    </span>
                  </td>
                  <td className="px-4 relative w-1/4 py-0 text-center">
                    <span className="relative h-full w-full py-3">
                      <span className="text-indigo-600 text-sm font-medium">
                        Unlimited invoices
                      </span>
                    </span>
                  </td>
                  <td className="pl-4 relative w-1/4 py-0 text-center">
                    <span className="relative h-full w-full py-3">
                      <span className="text-gray-900 text-sm font-medium">
                        10 invoices
                      </span>
                    </span>
                  </td>
                </tr>
                <tr key="Exclusive offers">
                  <th
                    scope="row"
                    className="w-1/4 py-3 pr-4 text-left text-sm font-medium text-gray-600">
                    Exclusive offers
                  </th>
                  <td className="px-4 relative w-1/4 py-0 text-center">
                    <span className="relative h-full w-full py-3">
                      <svg
                        className="mx-auto h-5 w-5 text-gray-400"
                        x-description="Heroicon name: mini/x-mark"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true">
                        <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                      </svg>
                      <span className="sr-only">No</span>
                    </span>
                  </td>
                  <td className="px-4 relative w-1/4 py-0 text-center">
                    <span className="relative h-full w-full py-3">
                      <svg
                        className="mx-auto h-5 w-5 text-indigo-600"
                        x-description="Heroicon name: mini/check"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true">
                        <path
                          fillRule="evenodd"
                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="sr-only">Yes</span>
                    </span>
                  </td>
                  <td className="pl-4 relative w-1/4 py-0 text-center">
                    <span className="relative h-full w-full py-3">
                      <svg
                        className="mx-auto h-5 w-5 text-indigo-600"
                        x-description="Heroicon name: mini/check"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true">
                        <path
                          fillRule="evenodd"
                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="sr-only">Yes</span>
                    </span>
                  </td>
                </tr>
                <tr key="6 months free advisor">
                  <th
                    scope="row"
                    className="w-1/4 py-3 pr-4 text-left text-sm font-medium text-gray-600">
                    6 months free advisor
                  </th>
                  <td className="px-4 relative w-1/4 py-0 text-center">
                    <span className="relative h-full w-full py-3">
                      <svg
                        className="mx-auto h-5 w-5 text-gray-400"
                        x-description="Heroicon name: mini/x-mark"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true">
                        <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                      </svg>
                      <span className="sr-only">No</span>
                    </span>
                  </td>
                  <td className="px-4 relative w-1/4 py-0 text-center">
                    <span className="relative h-full w-full py-3">
                      <svg
                        className="mx-auto h-5 w-5 text-indigo-600"
                        x-description="Heroicon name: mini/check"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true">
                        <path
                          fillRule="evenodd"
                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="sr-only">Yes</span>
                    </span>
                  </td>
                  <td className="pl-4 relative w-1/4 py-0 text-center">
                    <span className="relative h-full w-full py-3">
                      <svg
                        className="mx-auto h-5 w-5 text-indigo-600"
                        x-description="Heroicon name: mini/check"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true">
                        <path
                          fillRule="evenodd"
                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="sr-only">Yes</span>
                    </span>
                  </td>
                </tr>
                <tr key="Mobile and web access">
                  <th
                    scope="row"
                    className="w-1/4 py-3 pr-4 text-left text-sm font-medium text-gray-600">
                    Mobile and web access
                  </th>
                  <td className="px-4 relative w-1/4 py-0 text-center">
                    <span className="relative h-full w-full py-3">
                      <svg
                        className="mx-auto h-5 w-5 text-gray-400"
                        x-description="Heroicon name: mini/x-mark"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true">
                        <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                      </svg>
                      <span className="sr-only">No</span>
                    </span>
                  </td>
                  <td className="px-4 relative w-1/4 py-0 text-center">
                    <span className="relative h-full w-full py-3">
                      <svg
                        className="mx-auto h-5 w-5 text-indigo-600"
                        x-description="Heroicon name: mini/check"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true">
                        <path
                          fillRule="evenodd"
                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="sr-only">Yes</span>
                    </span>
                  </td>
                  <td className="pl-4 relative w-1/4 py-0 text-center">
                    <span className="relative h-full w-full py-3">
                      <svg
                        className="mx-auto h-5 w-5 text-gray-400"
                        x-description="Heroicon name: mini/x-mark"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true">
                        <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                      </svg>
                      <span className="sr-only">No</span>
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
            {/* Fake card borders */}
            <div
              className="pointer-events-none absolute inset-0 flex items-stretch"
              aria-hidden="true">
              <div className="w-1/4 pr-4" />
              <div className="w-1/4 px-4">
                <div className="h-full w-full rounded-lg ring-1 ring-black ring-opacity-5" />
              </div>
              <div className="w-1/4 px-4">
                <div className="h-full w-full rounded-lg ring-2 ring-indigo-600 ring-opacity-100" />
              </div>
              <div className="w-1/4 pl-4">
                <div className="h-full w-full rounded-lg ring-1 ring-black ring-opacity-5" />
              </div>
            </div>
          </div>
          <h3 className="mt-10 text-sm font-bold text-gray-900">Other perks</h3>
          <div className="relative mt-6">
            {/* Fake card backgrounds */}
            <div
              className="pointer-events-none absolute inset-0 flex items-stretch"
              aria-hidden="true">
              <div className="w-1/4 pr-4" />
              <div className="w-1/4 px-4">
                <div className="h-full w-full rounded-lg bg-white shadow" />
              </div>
              <div className="w-1/4 px-4">
                <div className="h-full w-full rounded-lg bg-white shadow-md" />
              </div>
              <div className="w-1/4 pl-4">
                <div className="h-full w-full rounded-lg bg-white shadow" />
              </div>
            </div>
            <table className="relative w-full">
              <caption className="sr-only">Perk comparison</caption>
              <thead>
                <tr className="text-left">
                  <th scope="col">
                    <span className="sr-only">Perk</span>
                  </th>
                  <th scope="col">
                    <span className="sr-only">Starter plan</span>
                  </th>
                  <th scope="col">
                    <span className="sr-only">Scale plan</span>
                  </th>
                  <th scope="col">
                    <span className="sr-only">Growth plan</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr key="24/7 customer support">
                  <th
                    scope="row"
                    className="w-1/4 py-3 pr-4 text-left text-sm font-medium text-gray-600">
                    24/7 customer support
                  </th>
                  <td className="px-4 relative w-1/4 py-0 text-center">
                    <span className="relative h-full w-full py-3">
                      <svg
                        className="mx-auto h-5 w-5 text-indigo-600"
                        x-description="Heroicon name: mini/check"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true">
                        <path
                          fillRule="evenodd"
                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="sr-only">Yes</span>
                    </span>
                  </td>
                  <td className="px-4 relative w-1/4 py-0 text-center">
                    <span className="relative h-full w-full py-3">
                      <svg
                        className="mx-auto h-5 w-5 text-indigo-600"
                        x-description="Heroicon name: mini/check"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true">
                        <path
                          fillRule="evenodd"
                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="sr-only">Yes</span>
                    </span>
                  </td>
                  <td className="pl-4 relative w-1/4 py-0 text-center">
                    <span className="relative h-full w-full py-3">
                      <svg
                        className="mx-auto h-5 w-5 text-indigo-600"
                        x-description="Heroicon name: mini/check"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true">
                        <path
                          fillRule="evenodd"
                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="sr-only">Yes</span>
                    </span>
                  </td>
                </tr>
                <tr key="Instant notifications">
                  <th
                    scope="row"
                    className="w-1/4 py-3 pr-4 text-left text-sm font-medium text-gray-600">
                    Instant notifications
                  </th>
                  <td className="px-4 relative w-1/4 py-0 text-center">
                    <span className="relative h-full w-full py-3">
                      <svg
                        className="mx-auto h-5 w-5 text-indigo-600"
                        x-description="Heroicon name: mini/check"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true">
                        <path
                          fillRule="evenodd"
                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="sr-only">Yes</span>
                    </span>
                  </td>
                  <td className="px-4 relative w-1/4 py-0 text-center">
                    <span className="relative h-full w-full py-3">
                      <svg
                        className="mx-auto h-5 w-5 text-indigo-600"
                        x-description="Heroicon name: mini/check"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true">
                        <path
                          fillRule="evenodd"
                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="sr-only">Yes</span>
                    </span>
                  </td>
                  <td className="pl-4 relative w-1/4 py-0 text-center">
                    <span className="relative h-full w-full py-3">
                      <svg
                        className="mx-auto h-5 w-5 text-indigo-600"
                        x-description="Heroicon name: mini/check"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true">
                        <path
                          fillRule="evenodd"
                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="sr-only">Yes</span>
                    </span>
                  </td>
                </tr>
                <tr key="Budgeting tools">
                  <th
                    scope="row"
                    className="w-1/4 py-3 pr-4 text-left text-sm font-medium text-gray-600">
                    Budgeting tools
                  </th>
                  <td className="px-4 relative w-1/4 py-0 text-center">
                    <span className="relative h-full w-full py-3">
                      <svg
                        className="mx-auto h-5 w-5 text-indigo-600"
                        x-description="Heroicon name: mini/check"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true">
                        <path
                          fillRule="evenodd"
                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="sr-only">Yes</span>
                    </span>
                  </td>
                  <td className="px-4 relative w-1/4 py-0 text-center">
                    <span className="relative h-full w-full py-3">
                      <svg
                        className="mx-auto h-5 w-5 text-indigo-600"
                        x-description="Heroicon name: mini/check"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true">
                        <path
                          fillRule="evenodd"
                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="sr-only">Yes</span>
                    </span>
                  </td>
                  <td className="pl-4 relative w-1/4 py-0 text-center">
                    <span className="relative h-full w-full py-3">
                      <svg
                        className="mx-auto h-5 w-5 text-indigo-600"
                        x-description="Heroicon name: mini/check"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true">
                        <path
                          fillRule="evenodd"
                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="sr-only">Yes</span>
                    </span>
                  </td>
                </tr>
                <tr key="Digital receipts">
                  <th
                    scope="row"
                    className="w-1/4 py-3 pr-4 text-left text-sm font-medium text-gray-600">
                    Digital receipts
                  </th>
                  <td className="px-4 relative w-1/4 py-0 text-center">
                    <span className="relative h-full w-full py-3">
                      <svg
                        className="mx-auto h-5 w-5 text-indigo-600"
                        x-description="Heroicon name: mini/check"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true">
                        <path
                          fillRule="evenodd"
                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="sr-only">Yes</span>
                    </span>
                  </td>
                  <td className="px-4 relative w-1/4 py-0 text-center">
                    <span className="relative h-full w-full py-3">
                      <svg
                        className="mx-auto h-5 w-5 text-indigo-600"
                        x-description="Heroicon name: mini/check"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true">
                        <path
                          fillRule="evenodd"
                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="sr-only">Yes</span>
                    </span>
                  </td>
                  <td className="pl-4 relative w-1/4 py-0 text-center">
                    <span className="relative h-full w-full py-3">
                      <svg
                        className="mx-auto h-5 w-5 text-indigo-600"
                        x-description="Heroicon name: mini/check"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true">
                        <path
                          fillRule="evenodd"
                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="sr-only">Yes</span>
                    </span>
                  </td>
                </tr>
                <tr key="Pots to separate money">
                  <th
                    scope="row"
                    className="w-1/4 py-3 pr-4 text-left text-sm font-medium text-gray-600">
                    Pots to separate money
                  </th>
                  <td className="px-4 relative w-1/4 py-0 text-center">
                    <span className="relative h-full w-full py-3">
                      <svg
                        className="mx-auto h-5 w-5 text-gray-400"
                        x-description="Heroicon name: mini/x-mark"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true">
                        <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                      </svg>
                      <span className="sr-only">No</span>
                    </span>
                  </td>
                  <td className="px-4 relative w-1/4 py-0 text-center">
                    <span className="relative h-full w-full py-3">
                      <svg
                        className="mx-auto h-5 w-5 text-indigo-600"
                        x-description="Heroicon name: mini/check"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true">
                        <path
                          fillRule="evenodd"
                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="sr-only">Yes</span>
                    </span>
                  </td>
                  <td className="pl-4 relative w-1/4 py-0 text-center">
                    <span className="relative h-full w-full py-3">
                      <svg
                        className="mx-auto h-5 w-5 text-indigo-600"
                        x-description="Heroicon name: mini/check"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true">
                        <path
                          fillRule="evenodd"
                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="sr-only">Yes</span>
                    </span>
                  </td>
                </tr>
                <tr key="Free bank transfers">
                  <th
                    scope="row"
                    className="w-1/4 py-3 pr-4 text-left text-sm font-medium text-gray-600">
                    Free bank transfers
                  </th>
                  <td className="px-4 relative w-1/4 py-0 text-center">
                    <span className="relative h-full w-full py-3">
                      <svg
                        className="mx-auto h-5 w-5 text-gray-400"
                        x-description="Heroicon name: mini/x-mark"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true">
                        <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                      </svg>
                      <span className="sr-only">No</span>
                    </span>
                  </td>
                  <td className="px-4 relative w-1/4 py-0 text-center">
                    <span className="relative h-full w-full py-3">
                      <svg
                        className="mx-auto h-5 w-5 text-indigo-600"
                        x-description="Heroicon name: mini/check"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true">
                        <path
                          fillRule="evenodd"
                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="sr-only">Yes</span>
                    </span>
                  </td>
                  <td className="pl-4 relative w-1/4 py-0 text-center">
                    <span className="relative h-full w-full py-3">
                      <svg
                        className="mx-auto h-5 w-5 text-gray-400"
                        x-description="Heroicon name: mini/x-mark"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true">
                        <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                      </svg>
                      <span className="sr-only">No</span>
                    </span>
                  </td>
                </tr>
                <tr key="Business debit card">
                  <th
                    scope="row"
                    className="w-1/4 py-3 pr-4 text-left text-sm font-medium text-gray-600">
                    Business debit card
                  </th>
                  <td className="px-4 relative w-1/4 py-0 text-center">
                    <span className="relative h-full w-full py-3">
                      <svg
                        className="mx-auto h-5 w-5 text-gray-400"
                        x-description="Heroicon name: mini/x-mark"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true">
                        <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                      </svg>
                      <span className="sr-only">No</span>
                    </span>
                  </td>
                  <td className="px-4 relative w-1/4 py-0 text-center">
                    <span className="relative h-full w-full py-3">
                      <svg
                        className="mx-auto h-5 w-5 text-indigo-600"
                        x-description="Heroicon name: mini/check"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true">
                        <path
                          fillRule="evenodd"
                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="sr-only">Yes</span>
                    </span>
                  </td>
                  <td className="pl-4 relative w-1/4 py-0 text-center">
                    <span className="relative h-full w-full py-3">
                      <svg
                        className="mx-auto h-5 w-5 text-gray-400"
                        x-description="Heroicon name: mini/x-mark"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true">
                        <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                      </svg>
                      <span className="sr-only">No</span>
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
            {/* Fake card borders */}
            <div
              className="pointer-events-none absolute inset-0 flex items-stretch"
              aria-hidden="true">
              <div className="w-1/4 pr-4" />
              <div className="w-1/4 px-4">
                <div className="h-full w-full rounded-lg ring-1 ring-black ring-opacity-5" />
              </div>
              <div className="w-1/4 px-4">
                <div className="h-full w-full rounded-lg ring-2 ring-indigo-600 ring-opacity-100" />
              </div>
              <div className="w-1/4 pl-4">
                <div className="h-full w-full rounded-lg ring-1 ring-black ring-opacity-5" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeatureComparision;
