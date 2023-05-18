import poster from "../../images/poster.png";
import { BsPlus } from "react-icons/bs";
import { BiMinus } from "react-icons/bi";

const HomeSection8 = () => {
  return (
    <div className="px-5 md:px-16 lg:px-20 xl:24  flex flex-col lg:flex-row gap-8">
      <div className="w-full lg:w-[70%]">
        <div className="sticky top-0 float-left py-[10vh] hidden xl:inline whitespace-normal w-[20%] h-auto">
          <div className="flex flex-col gap-4 pt-4 [&>a]:text-lg [&>a]:font-bold  ">
            <a href="#itr-overview" className="link:bg-red-600">
              Overview
            </a>
            <a href="#itr-documents">Dcuments Required</a>
            <a href="#itr-checklist">Checklist</a>
            <a href="#itr-benifits">Benifits</a>
            <a href="#itr-lasthate">Last Date</a>
            <a href="#itr-who">Who Should file?</a>
            <a href="#itr-how">How to file Income tax?</a>
            <a href="#itr-help">How finmet can help you?</a>
            <a href="#itr-faq">FAQs?</a>
            <a href="#itr-updates">Recent Updates</a>
          </div>
        </div>
        <div className="grow  xl:w-[80%] xl:ml-[20%] py-6 lg:py-[10vh] xl:px-6">
          <div className="space-y-6">
            <div id="itr-overview" className="space-y-6">
              <h1 className="text-2xl font-bold">
                E-Filing Income Tax Returns Online in India - An Overview
              </h1>
              <div className="space-y-3">
                <p>
                  Every responsible Indian citizen should file income tax to the
                  government. With present technology, you can easily file your
                  income tax online. This process is fast and accurate with no
                  time constraints.
                </p>
                <p>
                  However, Filing income tax return in India through the
                  official website involves filing ITR forms. There is a
                  different ITR form for individuals and ITR form for salaried
                  people. This is a critical task because the income tax
                  department has various forms titled from ITR 1 to ITR 7. Each
                  form has a specific function and belongs to a particular
                  category.
                </p>
                <p>
                  Even if you miss a single field in the form or make any errors
                  your income tax will not be filed on time. This is where you
                  need expert guidance. Vakilsearch files income tax for both
                  individuals and institutions regularly. So you can easily
                  count on us to file your income tax return online. For that,
                  you will have to provide us with the following documents.
                </p>
              </div>
            </div>
            <div id="itr-documents" className="space-y-6">
              <h1 className="text-2xl font-bold">
                Documents Required for ITR Return File
              </h1>
              <div className="space-y-3">
                <p>
                  <h3 className="font-bold">If you are an employee:</h3>
                  <li>PAN card</li>
                  <li>Form 16 provided by your employer</li>
                  <li>Salary slip (**Very essential for e filing of ITR)</li>
                </p>
                <p>
                  <h3 className="font-bold">If you are a business owner:</h3>
                  <li>Trading report</li>
                  <li>Business account details</li>
                  <li>Profit and loss statement if any</li>
                </p>
                <p>
                  <h3 className="font-bold">
                    Apart from this, you can submit:
                  </h3>
                  <li>Investment proofs</li>
                  <li>Asset purchase/sale documents</li>
                  <li>ThS certificates provided by banks</li>
                  <li>Interest income statement</li>
                  <li>
                    Receipts regarding donations mutual funds and other forms of
                    investments.
                  </li>
                </p>
              </div>
            </div>
            <div id="itr-checklist" className="space-y-6">
              <h1 className="text-2xl font-bold">
                Checklist for Income Tax Return Filing (ITR return)
              </h1>
              <div className="space-y-3">
                <p>
                  For Filing income tax return, Section 139 (1) of the
                  Income-tax Act 1961 specifies any individual whose total
                  income during the previous year is more than the maximum
                  amount not chargeable to tax should file their income tax
                  returns online. Let us make it clear: Any individual earning
                  more than ₹2.5 lakhs, ₹3 lakhs or ₹5 lakhs should file ITR.
                </p>
              </div>
            </div>
            <div id="itr-benifits" className="space-y-6">
              <h1 className="text-2xl font-bold">
                Benefits of E-Filing of Income Tax Return
              </h1>
              <div className="space-y-3">
                <p>The advantages of ITR Filing are:</p>
                <p>
                  <span className="font-bold">Loans:</span> Bank loans like
                  education loans, vehicle loans, personal loans, can be availed
                  easily as they require the last three year’s IT returns.
                </p>
                <p>
                  <span className="font-bold">Visas:</span> As Immigration
                  centres scrutinise many documents and IT returns, proofs are a
                  mandatory document for visa applicants.
                </p>
                <p>
                  <span className="font-bold">Avoid penalties:</span> Hefty
                  amounts would be charged for non-filing of income tax returns
                  and hence it is always better to file it to avoid legal
                  repercussions.
                </p>
                <div className="flex  py-6 rounded-lg overflow-hidden justify-center w-full">
                  <img
                    src={poster}
                    alt=""
                    className="rounded-lg shadow-sm max-w-xl w-full"
                  />
                </div>
              </div>
            </div>
            <div id="itr-lasthate" className="space-y-6">
              <h1 className="text-2xl font-bold">
                Last Date for Filing Income Tax Returns
              </h1>
              <div className="space-y-3">
                <p>
                  The return that is currently being filed is for the income you
                  earned in FY 2022-23, or for the money earned between 1 April
                  2022 and 31 March 2023, must be submitted before 31 July 2023,
                  in order to avoid a late filing penalty.
                </p>
              </div>
            </div>
            <div id="itr-who" className="space-y-6">
              <h1 className="text-2xl font-bold">
                Who Should File an Income Tax Return?
              </h1>
              <div className="space-y-3">
                <p>
                  <h3 className="">
                    According to the Income Tax Department, the following
                    entities are required to file yearly IT returns:
                  </h3>
                  <li>
                    Salaried individuals with gross income exceeding the
                    exemption level before deductions under Sections 80C to 80U
                  </li>
                  <li>
                    Regardless of profit or loss, every firm, whether private
                    limited, LLP, or partnership, is required to file IT return
                  </li>
                  <li>
                    Individuals who are Directors in a Private Limited Company
                    or a Partner in a Limited Liability Partnership firm.
                  </li>
                  <li>
                    Individuals who earn dividends from mutual funds, bonds,
                    equities, fixed deposits, interest, and other sources
                  </li>
                  <li>
                    Individuals that receive income through charity or religious
                    trusts, as well as income from voluntary contributions
                  </li>
                  <li>Individuals and businesses seeking tax refunds</li>
                  <li>
                    NRIs and tech professionals on onsite deputation, as well as
                    anyone with foreign income or assets.
                  </li>
                </p>
              </div>
            </div>
            <div id="itr-how" className="space-y-6">
              <h1 className="text-2xl font-bold">
                How to File Your Income Tax Return Online
              </h1>
              <div className="space-y-3">
                <p>
                  For ITR filing online, first and foremost keep all the soft
                  copies, scanned copies of all the required documents like your
                  bank statement and last year's return. You should also fill
                  out income tax Form 16.
                </p>
                <p>
                  <span className="font-bold">itr online apply:</span> Submit
                  all the required documents to our experts
                </p>
                <p>
                  <span className="font-bold">Step 2:</span> Through the
                  registered portal our experts will file your income tax return
                  online
                </p>
                <p>
                  <span className="font-bold">Step 3:</span> ITR Filing Form
                  will be selected based on your category, and experts will fill
                  in all required information and claim any applicable
                  exemptions
                </p>
                <p>
                  <span className="font-bold">Step 4:</span> Our experts will
                  inform you regarding the tax payable amount if any after all
                  exemptions
                </p>
                <p>
                  <span className="font-bold">Step 5:</span> Subsequently your
                  income tax return will be filed without any hassle.
                </p>
                <p className="font-bold">
                  <span>Note:</span> Make sure to fill in accurate details in
                  every field of the form, and select the applicable ITR Filing
                  Form based on your criteria. If you have any doubts you can
                  reach out to our expert and they will help you out.
                </p>
                <p>
                  You should know that non-compliance with filing of income tax
                  returns can result in huge penalties. So why take that risk,
                  when you can easily get an expert to file your income tax
                  returns online!
                </p>
              </div>
            </div>
            <div id="itr-help" className="space-y-6">
              <h1 className="text-2xl font-bold">
                How Vakilsearch Can Help You With ITR Filing?
              </h1>
              <div className="space-y-3">
                <p>
                  Filing income tax returns on your own is going to be a tedious
                  task. But if you choose Vakilsearch to file your income tax
                  returns, the whole process can be completed in just three
                  steps. We have an expert team who can provide support around
                  the clock and file your income tax returns online without any
                  delay. Why Do It Yourselves, when our experts can do it for
                  you ASAP
                </p>
                <p>
                  <span className="font-bold">Affordable price:</span> Submit
                  When compared to other competitors we provide the most
                  affordable price to file your income tax return online
                </p>
                <p>
                  <table className="w-full">
                    <thead>
                      <tr className="border ">
                        <th className="text-start border w-[70%] p-1 pl-2">
                          Category
                        </th>
                        <th className="text-start w-[30%]  p-1 pl-2 ">
                          Charges
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="text-start border w-[70%] p-1 pl-2">
                          Salaried Employees upto ₹10 Lakhs
                        </td>
                        <td className="text-start border w-[70%] p-1 pl-2">
                          ₹999/-
                        </td>
                      </tr>
                      <tr>
                        <td className="text-start border w-[70%] p-1 pl-2">
                          Salaried Employees upto ₹25 Lakhs
                        </td>
                        <td className="text-start border w-[70%] p-1 pl-2">
                          ₹1499/-
                        </td>
                      </tr>
                      <tr>
                        <td className="text-start border w-[70%] p-1 pl-2">
                          Salaried Employees above ₹25 Lakhs
                        </td>
                        <td className="text-start border w-[70%] p-1 pl-2">
                          ₹1999/-
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </p>
                <p>
                  <span className="font-bold">Super fast process</span> If you
                  are running low on time or pretty close to the deadline then
                  you should reach out to our experts. We provide the fastest
                  income tax returns filing process in the country
                </p>
                <p>
                  <span className="font-bold">Adept team</span> Filing income
                  tax returns is one of our daily jobs, our team does it with
                  such ease!
                </p>
                <p>
                  <span className="font-bold">Popular in town</span> More than
                  thousands of companies choose Vakilsearch for filing their
                  Income tax. Apart from this, we have a large number of
                  individuals who choose Vakilsearch for filing their income tax
                  return online.
                </p>
                <p>
                  All you have to do is reach out to us, sit back, relax, and
                  watch your income tax return filing at super ease.
                </p>
              </div>
            </div>
            <div id="itr-faq" className="space-y-6">
              <h1 className="text-2xl font-bold">
                FAQs on E-Filing of Income Tax Returns Online 2023-24
              </h1>
              <div className="space-y-2">
                <Accordian
                  index="1"
                  title="My company deducts TDS, should I still file my tax return?"
                  detail="Of course, technically there is a difference between filing income tax returns and detecting TDS. In this case, when you file a tax return it becomes a proof of payment of all taxes due. The income tax return documents will also be an added benefit when you apply for a loan. Also, if there are any excess taxes deducted the same will be refunded to your bank account"
                />
                <Accordian
                  index="2"
                  title="If I had paid extra tax how would it be refunded to me?"
                  detail="The government has provided options to refund your excess tax amount when you file your IT return. This will be credited directly to the specific bank account through an ECS. Make sure to file the bank details with utmost care."
                />
                <Accordian
                  index="3"
                  title="Should I also file a return of income when I am at a loss?"
                  detail="You must file a return in time even if you face any financial loss in that particular year. You can easily carry forward to adjusting with the positive income in the following years. But this option will be provided only if you file your income tax return on time. For further queries, you can write to us."
                />
                <Accordian
                  index="4"
                  title="Should I attach any documents along with the ITR forms?"
                  detail="Technically an income tax return form should not be attached to any other documents. However, you should provide these documents in proper order in case of any inquiry."
                />
                <Accordian
                  index="5"
                  title="What is the minimum salary to ITR Filing Online?"
                  detail="As per the Income tax Act, you should file an income tax return in India if your total income exceeds ₹2.5 lakh in the given financial year."
                />
                <Accordian
                  index="6"
                  title="How to file an Income Tax Return online?"
                  detail="The most easy way is to file the returns online through Vakilsearch. There are three methods for submitting income tax returns online:
To e-File, use a Digital Signature Certificate (DSC)
e-File without a Certificate of Digital Signature
Using an e-Return Intermediary (ERI) to electronically file the income tax return with or without a digital signature certificate (DSC)."
                />
                <Accordian
                  index="7"
                  title="When to file Income Tax Return for AY 2023 24?"
                  detail="The due date to file Income Tax Return for AY 2023-24 is 31 July 2023 for individuals and HUFs who are not required to get their accounts audited"
                />
                <Accordian
                  index="8"
                  title="What is the due date of return filing for Companies?"
                  detail="The due date of return filing for Companies is 30 September 2023"
                />
                <Accordian
                  index="9"
                  title="What are the tax brackets for 2023 2024?"
                  detail="The tax brackets for AY 2023-24 are not announced yet. They are usually announced in the annual budget, which is presented in the month of February"
                />
                <Accordian
                  index="10"
                  title="How do I pay tax to the government?"
                  detail="You can pay tax to the government through various modes such as net banking, debit card, credit card, or by visiting the bank."
                />
                <Accordian
                  index="11"
                  title="How can I download ITR without login?"
                  detail="You cannot download ITR without login. To download ITR, you need to log in to the e-filing portal of the Income Tax Department using your login credentials."
                />
              </div>
            </div>
            <div id="itr-updates" className="space-y-6">
              <h1 className="text-2xl font-bold">Recent Updates</h1>
              <div className="space-y-3">
                <p>
                  During the current fiscal year, 2022–2023, the Central Board
                  of Direct Taxes (CBDT) has announced the ITR forms ITR-1 to
                  ITR-6 (AY 2023-24). The government announced the ITR-7 form on
                  February 14, 2023. ITR forms haven't undergone any significant
                  changes. The ITR forms have, however, been announced over two
                  months earlier than usual.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="sticky  float-right top-0 pb-6 lg:py-[11vh] w-full h-min lg:w-[30%]">
        <form
          action="/request_mail.php"
          method="POST"
          className="bg-white space-y-4 text-black p-5 lg:p-10 rounded-lg shadow-2xl   w-full "
        >
          <h1 className="text-xl font-bold text-center">Get Started! </h1>
          <input
            type="text"
            required
            name="fname"
            placeholder="Name*"
            className="border-b border-gray-300 p-2 w-full"
          />
          <input
            type="number"
            name="phone"
            required
            placeholder="mobile*"
            className="border-b border-gray-300 p-2 w-full"
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Email"
            className="border-b border-gray-300 p-2 w-full"
          />
          <input
            name="city"
            type="text"
            required
            placeholder="City*"
            className="border-b border-gray-300 p-2 w-full"
          />
          <input
            name="message"
            type="text"
            required
            placeholder="Service type*"
            className="border-b border-gray-300 p-2 w-full"
          />
          <div className="pt-4">
            <button
              id="form-btn"
              type="submit"
              className="p-2 px-8 rounded-sm bg-rose-600 text-white w-full"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default HomeSection8;

const Accordian = (prop: { title: string; detail: string; index: string }) => {
  return (
    <div className="relative">
      <input
        type="checkbox"
        className="peer hidden"
        id={"accordian" + prop.index}
      />
      <label
        htmlFor={"accordian" + prop.index}
        className="flex justify-between p-2 items-center cursor-pointer hover:shadow-lg mb-4 peer-checked:shadow-lg "
      >
        <p>{prop.title}</p>
      </label>
      <div className="absolute right-2 top-2 peer-checked:block hidden">
        <BiMinus color="#e11d48" size={25} className="acc-plus " />
      </div>
      <div className="absolute right-2 top-2 peer-checked:hidden block">
        <BsPlus color="#e11d48" size={25} className="acc-plus " />
      </div>
      <label className="p-2 hidden overflow-hidden transition-all duration-300 text-gray-500 peer-checked:block">
        {prop.detail}
      </label>
    </div>
  );
};
