import poster from "../../images/poster.png";
import { BsPlus } from "react-icons/bs";
import { BiMinus } from "react-icons/bi";
import { useState } from "react";
import GetStartedForm from "../GetStartedForm";
import { IModalContent } from "../Types";

const HomeSection8 = (prop: {
  togelModal: (content: IModalContent) => void;
}) => {
  return (
    <div className="px-5 md:px-16 lg:px-20 xl:px-24  flex flex-col lg:flex-row gap-8">
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
                  need expert guidance. finmet files income tax for both
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
                Here's how Finmet can help you with ITR filing:
              </h1>
              <div className="space-y-3">
                <p>
                  <span className="font-bold">Expert Guidance:</span> Our
                  knowledgeable experts will guide you through the entire
                  process, explaining the necessary documents, deductions, and
                  exemptions applicable to your specific circumstances. We take
                  the time to understand your financial situation and provide
                  personalized advice to optimize your tax returns.
                </p>
                <p>
                  <span className="font-bold">Document Preparation: </span> We
                  assist you in gathering and organizing all the required
                  documents, such as salary statements, investment proofs, rent
                  receipts, and other relevant financial records. Our team
                  ensures that your documents are complete, accurate, and
                  compliant with tax regulations.
                </p>
                <p>
                  <span className="font-bold">Income Tax Calculation: </span> We
                  meticulously calculate your taxable income, taking into
                  account various factors such as salary, investments,
                  allowances, deductions, and exemptions. Our experts leverage
                  their knowledge and cutting-edge tools to maximize your
                  eligible deductions and minimize your tax liability.
                </p>
                <p>
                  <span className="font-bold">Filing Assistance: </span> Our
                  professionals handle the entire filing process on your behalf.
                  We prepare and submit your income tax returns electronically,
                  ensuring that they meet all the necessary legal requirements.
                  We double-check the accuracy of your returns to minimize the
                  chances of errors or discrepancies.
                </p>
                <p>
                  <span className="font-bold">Timely Updates: </span> We keep
                  you informed about the latest developments in tax laws and
                  regulations, including changes in tax slabs, deductions, and
                  compliance requirements. Our team ensures that you are
                  well-prepared and aware of any updates that may impact your
                  tax filing.
                </p>
                <p>
                  Year-round Tax Planning: Beyond ITR filing, we offer
                  year-round tax planning services to help you proactively
                  manage your tax obligations. Our experts work with you to
                  devise strategies that minimize your tax liability, optimize
                  investments, and plan for long-term financial goals.
                </p>
                <p>
                  At finmet, we strive to make ITR filing a stress-free
                  experience for individuals and businesses alike. With our
                  expertise and personalized approach, you can trust us to
                  handle your tax matters efficiently, accurately, and with the
                  utmost confidentiality.
                </p>
                <p>
                  Don't let the complexities of ITR filing overwhelm you.
                  Contact us today and let us help you navigate the tax
                  landscape with ease and confidence!
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
                  title="My company deducts TDS, should I still file my tax return?"
                  detail="Of course, technically there is a difference between filing income tax returns and detecting TDS. In this case, when you file a tax return it becomes a proof of payment of all taxes due. The income tax return documents will also be an added benefit when you apply for a loan. Also, if there are any excess taxes deducted the same will be refunded to your bank account"
                />
                <Accordian
                  title="If I had paid extra tax how would it be refunded to me?"
                  detail="The government has provided options to refund your excess tax amount when you file your IT return. This will be credited directly to the specific bank account through an ECS. Make sure to file the bank details with utmost care."
                />
                <Accordian
                  title="Should I also file a return of income when I am at a loss?"
                  detail="You must file a return in time even if you face any financial loss in that particular year. You can easily carry forward to adjusting with the positive income in the following years. But this option will be provided only if you file your income tax return on time. For further queries, you can write to us."
                />
                <Accordian
                  title="Should I attach any documents along with the ITR forms?"
                  detail="Technically an income tax return form should not be attached to any other documents. However, you should provide these documents in proper order in case of any inquiry."
                />
                <Accordian
                  title="What is the minimum salary to ITR Filing Online?"
                  detail="As per the Income tax Act, you should file an income tax return in India if your total income exceeds ₹2.5 lakh in the given financial year."
                />
                <Accordian
                  title="How to file an Income Tax Return online?"
                  detail="The most easy way is to file the returns online through finmet. There are three methods for submitting income tax returns online:
To e-File, use a Digital Signature Certificate (DSC)
e-File without a Certificate of Digital Signature
Using an e-Return Intermediary (ERI) to electronically file the income tax return with or without a digital signature certificate (DSC)."
                />
                <Accordian
                  title="When to file Income Tax Return for AY 2023 24?"
                  detail="The due date to file Income Tax Return for AY 2023-24 is 31 July 2023 for individuals and HUFs who are not required to get their accounts audited"
                />
                <Accordian
                  title="What is the due date of return filing for Companies?"
                  detail="The due date of return filing for Companies is 30 September 2023"
                />
                <Accordian
                  title="What are the tax brackets for 2023 2024?"
                  detail="The tax brackets for AY 2023-24 are not announced yet. They are usually announced in the annual budget, which is presented in the month of February"
                />
                <Accordian
                  title="How do I pay tax to the government?"
                  detail="You can pay tax to the government through various modes such as net banking, debit card, credit card, or by visiting the bank."
                />
                <Accordian
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
        <GetStartedForm togelModal={prop.togelModal} />
      </div>
    </div>
  );
};

export default HomeSection8;

const Accordian = (prop: { title: string; detail: string }) => {
  const [state, setState] = useState(false);
  return (
    <div className="">
      <div
        className={`flex justify-between p-2 items-center cursor-pointer hover:shadow-lg mb-4 ${
          state && "shadow-lg"
        }`}
        onClick={() => {
          setState((state) => !state);
        }}
      >
        <p>{prop.title}</p>
        <div>
          {state ? (
            <BiMinus color="#e11d48" size={25} />
          ) : (
            <BsPlus color="#e11d48" size={30} />
          )}
        </div>
      </div>
      <div
        className={`${
          state ? "h-auto p-2" : "h-0"
        } overflow-hidden transition-all duration-300 text-gray-500 `}
      >
        {prop.detail}
      </div>
    </div>
  );
};
