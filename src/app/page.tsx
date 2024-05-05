"use client";
import React from "react";
// import { calsans } from "@/fonts/calsans";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { EvervaultCard, Icon } from "../app/components/evervault-card";
import { TracingBeam } from "../app/components/tracing-beam";
import Link from "next/link";

export default function Page() {
  return (
    <div>
      <div className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start mx-12 p-4 relative h-[30rem]">
        <EvervaultCard text="The evolution of Bitcoin exchange-traded funds and implications for the regulation of cryptocurrencies" />
      </div>
      <div className="mx-24">
        <div>
          <h1 className="font-semibold text-2xl"> Introduction </h1>
          <p>
            When thinking about retirement or building wealth, the best means to
            do so is through investments. Before the 1950s, investments were
            only performed by the wealthy who had the capital and knowledge to
            do so. Today, with the prevalence of electronically traded funds and
            online brokerages, investing has become easier than ever. Thus,
            understanding all the resources that are possible when investing is
            crucial to grow your money.
          </p>
          <br />
          <p>
            As the financial world merges with technology, investments into
            blockchain and bitcoin have become much more prominent with some
            publications calling cryptocurrency as the “future of finance.” [1]
            In its simplest terms, cryptocurrency is a type of currency (similar
            to the US dollar) that accrues value through trust. In the context
            of USD, you would buy and sell goods with the dollar knowing that
            the US government and businesses would validate that dollar. In the
            context of cryptocurrencies, a decentralized network of computers
            validates transactions instead of a centralized entity like the
            government or banks. But in the nature of a decentralized currency
            system, finding a safe way to invest in the bitcoin market is
            difficult.
          </p>
          <br />
          <p>
            Investors can usually buy ETFs or electronically traded funds that
            track the price of certain commodities such as gold or silver. This
            type of fund was lacking for ETFs. One major reason is the
            regulatory struggles that bitcoin has faced.
          </p>
          <br />
          <p>
            What makes bitcoin a risky investment to most investors is that 1)
            not many people understand how cryptocurrency works and what they
            are purchasing and 2) lacks adequate regulations for exchanges that
            allow selling of bitcoin.
          </p>
          <br />
          <p>
            The journey of Bitcoin ETFs from initial rejection to limited
            acceptance underscores the gradual evolution of regulatory stances
            towards cryptocurrencies, providing a blueprint for understanding
            how regulators might approach future financial innovations.
          </p>
        </div>

        <div>
          <br />
          <h1 className="font-semibold text-2xl"> The Blockchain Trilema </h1>
          <p>
            First, we have to understand the trilemma that Bitcoin faces when
            trying to be an effective form of cryptocurrency. There are three
            aspects which Bitcoin tries to accomplish: correctness, cost
            efficiency, and decentralization [3]. These aspects are the core
            tenants which Bitcoin tries to follow.
          </p>
          <br />
          <p>
            Correctness is the idea that the chain is correct and no hackers or
            malicious manipulation happens with the price. Cost efficiency is to
            ensure that using Bitcoin does not cost that much money or
            maintenance. These costs include environmental costs when people
            mine Bitcoins or fees that may be present to maintain a sound
            system. And decentralization is the idea of not having a middle man
            or central system to maintain the Bitcoin transactions. The idea of
            the “blockchain trilemma” is how none of the three can be
            effectively solved [3].
          </p>
          <br />
          <p>
            For example, when Bitcoin is correct, the correctness requires a
            sacrifice in either cost or decentralization. Cost would be required
            to maintain the ever long chain or having some expensive system to
            maintain correctness and trust amongst users. Decentralization would
            be required to make sure that all parties are correct in their
            transactions when using Bitcoin. Another example is when Bitcoin is
            decentralized, the correctness of the cryptocurrency is hard to
            maintain. Either the system would have to increase cost to have a
            more robust system or the system would be incorrect since the system
            has no one to verify.
          </p>
          <br />
          <p>
            In this article, our focus would be on the decentralization part as
            regulation would be directly affecting how “centralized” Bitcoin
            becomes. The monitoring and surveillance which many propose could be
            counterintuitive to the decentralized nature. But monitoring is
            necessary to protect consumers.
          </p>
        </div>

        <div>
          <br />
          <h1 className="font-semibold text-2xl"> Bitcoin as an asset </h1>
          <p>
            One key aspect of Bitcoin is how the cryptocurrency is treated much
            more as an asset class or investment rather than a method of
            transaction. In present-day, not many people use bitcoins for
            transactions. According to fundera, the United States only houses
            2,300 companies that accept Bitcoin. In fact, South Dakota only has
            one business that accepts bitcoin. [4] Looking at transactions
            around the world, Bitcoin only has about 507,622 per day [5] while
            credit cards alone manage about 54.8 billion transactions per day
            [6]. Yet Bitcoin still has a dominating presence in how many people
            put money into the asset. As of April 10, 2024, the combined value
            of Bitcoin was about $1.39 trillion [7].
          </p>
          <br />
          <p>
            In the current state of cryptocurrency, you can easily buy Bitcoin
            through an exchange or certain broker-dealers and store money in
            Bitcoin. The main issue is the lack of understanding of how
            cryptocurrency and blockchain works. The mystifying element of
            blockchain makes the SEC and many regulators view Bitcoin much as a
            risky investment.
          </p>
          <br />
          <p>
            Through the exploration of the timeline of Bitcoin ETFs developments
            and regulatory responses, we can see the implications of decisions
            to Bitcoin prices as well as comparisons to other countries.
          </p>
        </div>
      </div>

      <TracingBeam className="px-6 my-12">
        <div className="max-w-2xl mx-auto antialiased pt-4 relative">
          {dummyContent.map((item, index) => (
            <div key={`content-${index}`} className="mb-10">
              <h2 className="bg-black text-white rounded-full text-lg w-fit px-4 py-1 mb-4 font-semibold">
                {item.title}
              </h2>

              {/* <p>{item.title}</p> */}

              <div className="text-sm  prose prose-sm dark:prose-invert">
                {item?.image && (
                  <Image
                    src={`/image${index + 1}.jpeg`}
                    alt={item.title}
                    height="1000"
                    width="1000"
                    className="rounded-lg object-cover mb-2"
                  />
                )}
                {item?.source && (
                  <p className="mb-8 italic">
                    Image From{" "}
                    <Link className="text-blue-400" href={item.source}>
                      {item.sourceName}
                    </Link>
                  </p>
                )}
                {item.description}
              </div>
            </div>
          ))}
        </div>
      </TracingBeam>

      <div className="mx-24 z-10">
        <div>
          <h1 className="font-semibold text-2xl"> Current Usage </h1>
          <p>
            Vanguard, one of the largest asset managers in the world, does not
            offer Bitcoin Spot ETFs. According to Vanguard:
          </p>
          <p>
            &quot;In Vanguard’s view, crypto is more of a speculation than an
            investment. This is at the root of our decision to not offer crypto
            products, whether our own or others. With equities, you own a share
            of a company that produces goods or services, and many also pay
            dividends&quot; [27].
          </p>
          <p>
            Vanguard holds many of the views that the SEC has rejected and
            delayed Bitcoin for. Due to the nature of speculation that the coin
            holds by itself, the price of Bitcoin is highly volatile. People who
            put money into Vanguard or institutional investors expect that their
            money is safe and use it as a guarantee of retirement. By adjusting
            some amount towards a commodity such as Bitcoin, the risk may be too
            much for the portfolio to take even if the investment allows for
            diversification.
          </p>
          <br />
          <p>
            In comparison, Blackrock, another world-renowned asset manager, has
            embraced the Bitcoin ETFs and invested in creating their own.
            Blackrock’s CEO has been &quot;pleasantly surprised&quot; in the
            advancement and the movement of the new Bitcoin ETF [28]. The large
            holding and welcoming of Bitcoins have been successful for Blackrock
            holding $17.1 billion in Bitcoin. The ETF has increased by 45% since
            inception, which is very high [28].
          </p>
          <p>
            These increases may be a product of the hype that has been around
            the Bitcoin spot ETF rather than the actual increase of investors
            exposed in the market. An argument can be made that normal investors
            still do not understand or want to invest into Bitcoin.
          </p>
          <br />
        </div>

        <div>
          <h1 className="font-semibold text-2xl"> Conclusion </h1>
          <p>
            Regulation in Bitcoin is incredibly impactful to not only Bitcoin’s
            current price but also to future blockchain technologies. As a
            pioneer in leading changes in regulations in the world, how the SEC
            and the US views Bitcoin would be indicative of the future of
            financial technology.
          </p>
          <br />
          <p>
            The largest concern which has been brought up multiple times in US
            regulation is how much they are protecting Bitcoin consumers and
            also exchanges in activities surrounding Bitcoin. Without much
            support from the US, innovative companies may choose to leave the
            country and find one which has a more established set of guidelines
            and assistance.
          </p>
          <br />
          <p>
            Moreover, the lack of clear guidelines and support from the U.S.
            government creates uncertainty for businesses operating in the
            cryptocurrency space. This regulatory ambiguity can stifle
            innovation and hinder the growth of legitimate companies seeking to
            develop and offer products and services related to Bitcoin and other
            digital assets.
          </p>
          <br />
          <p>
            To prevent companies from moving out of the US, the SEC and
            regulators should be proactive in setting rules and boundaries for
            Bitcoin and protecting its investors. Not doing so would not only
            tank the price of Bitcoin, but also move business overseas. The
            United States should take a more proactive approach towards
            regulating Bitcoin and other financial technologies in order to stay
            ahead of innovation. As seen throughout the timeline, the
            regulators’ non-movement towards the Bitcoin space hurt them in the
            end since Bitcoin will always be a large part of the future of
            financial technology.
          </p>
          <br />
        </div>

        <div>
          <h1 className="font-semibold text-2xl"> References </h1>
          <p className="text-xs">
            [1]M. Sonnenshein, &quot;Is cryptocurrency the future of
            finance?,&quot; World Economic Forum, Nov. 11, 2022. Accessed: May
            03, 2024. [Online]. Available:
            https://www.weforum.org/agenda/2022/11/cryptocurrency-us-midterms/
            <br />
            [2]A. Hetler, &quot;FTX scam explained: Everything you need to
            know,&quot; TechTarget, Mar. 28, 2024. Accessed: May 03, 2024.
            [Online]. Available:
            https://www.techtarget.com/whatis/feature/FTX-scam-explained-Everything-you-need-to-know
            <br />
            [3]&quot;Blockchain Trilemma: Scaling and Security Issues,&quot;
            Gemini.
            https://www.gemini.com/cryptopedia/blockchain-trilemma-decentralization-scalability-definition
            (accessed May 03, 2024).
            <br />
            [4]M. Shepherd, &quot;How Many Businesses Accept Bitcoin? Full List
            - Fundera Ledger,&quot; Fundera, Aug. 06, 2019. Accessed: May 03,
            2024. [Online]. Available:
            https://www.fundera.com/resources/how-many-businesses-accept-bitcoin
            <br />
            [5]&quot;Bitcoin, Ethereum, Dogecoin, Litecoin stats,&quot;
            BitInfoCharts. https://bitinfocharts.com/ (accessed May 03, 2024).
            <br />
            [6]&quot;Number of Credit Card Transactions per Second &amp; Year:
            2024 Data,&quot; Capital One Shopping, Jun. 10, 2023.
            https://capitaloneshopping.com/research/number-of-credit-card-transactions
            (accessed May 03, 2024).
            <br />
            [7]N. Reiff, &quot;How Much of All Money Is in Bitcoin?,&quot;
            Investopedia, Jun. 26, 2017. Accessed: May 03, 2024. [Online].
            Available:
            https://www.investopedia.com/tech/how-much-worlds-money-bitcoin/
            <br />
            [8]N. Popper, &quot;S.E.C. Rejects Winklevoss Brothers’ Bid to
            Create Bitcoin E.T.F.,&quot; The New York Times, Mar. 10, 2017.
            Accessed: May 03, 2024. [Online]. Available:
            https://www.nytimes.com/2017/03/10/business/dealbook/winkelvoss-brothers-bid-to-create-a-bitcoin-etf-is-rejected.html
            <br />
            [9]G. Keirns, &quot;From First Filing to Final Decision: The Journey
            of the Winklevoss Bitcoin ETF,&quot; CoinDesk, Mar. 09, 2017.
            Accessed: May 03, 2024. [Online]. Available:
            https://www.coindesk.com/markets/2017/03/09/from-first-filing-to-final-decision-the-journey-of-the-winklevoss-bitcoin-etf/
            <br />
            [10]U. S. S. and E. Commission, &quot;Order Disapproving a Proposed
            Rule Change, as Modified by Amendments No. 1 and 2, to BZX Rule
            14.11(e)(4), Commodity-Based Trust Shares, to List and Trade Shares
            Issued by the Winklevoss Bitcoin Trust&quot;.
            <br />
            [11]&quot;Crypto companies touting FDIC insurance? Not so
            fast.,&quot; Consumer Advice, Oct. 12, 2023.
            https://consumer.ftc.gov/consumer-alerts/2023/10/crypto-companies-touting-fdic-insurance-not-so-fast
            (accessed May 03, 2024).
            <br />
            [12]J. Garber, &quot;Bitcoin spikes after Japan says it’s a legal
            payment method,&quot; Insider, Apr. 03, 2017. Accessed: May 03,
            2024. [Online]. Available:
            https://www.businessinsider.com/bitcoin-price-spikes-as-japan-recognizes-it-as-a-legal-payment-method-2017-4
            <br />
            [13]R. Sharma, &quot;Bitcoin Has a Regulation Problem,&quot;
            Investopedia, Jan. 23, 2018. Accessed: May 03, 2024. [Online].
            Available:
            https://www.investopedia.com/news/bitcoin-has-regulation-problem/
            <br />
            [14]E. Cheng, &quot;Bitcoin debuts on the world’s largest futures
            exchange, and prices fall slightly,&quot; CNBC, Dec. 17, 2017.
            Accessed: May 03, 2024. [Online]. Available:
            https://www.cnbc.com/2017/12/17/worlds-largest-futures-exchange-set-to-launch-bitcoin-futures-sunday-night.html
            <br />
            [15]P. Vigna, &quot;Van Eck, SolidX to Offer Limited Version of
            Bitcoin Exchange-Traded Fund,&quot; Wall Street Journal, Sep. 03,
            2019.
            https://www.wsj.com/articles/van-eck-solidx-to-offer-limited-version-of-bitcoin-exchange-traded-fund-11567503003
            <br />
            [16]E. Cheng, &quot;VanEck tries a third time for a bitcoin
            ETF,&quot; CNBC, Jun. 06, 2018. Accessed: May 03, 2024. [Online].
            Available:
            https://www.cnbc.com/2018/06/06/vaneck-tries-a-third-time-for-a-bitcoin-etf.html
            <br />
            [17]K. Rooney and B. Pisani, &quot;Winklevoss twins bitcoin ETF
            rejected by SEC,&quot; CNBC, Jul. 26, 2018. Accessed: May 03, 2024.
            [Online]. Available:
            https://www.cnbc.com/2018/07/26/winklevoss-twins-bitcoin-etf-rejected-by-sec.html
            <br />
            [18]The Investopedia Team, &quot;Gemini Exchange: Meaning, Products,
            Plans,&quot; Investopedia, Jun. 08, 2018. Accessed: May 03, 2024.
            [Online]. Available:
            https://www.investopedia.com/terms/g/gemini-exchange.asp
            <br />
            [19]The Investopedia Team, &quot;What Was the Silk Road Online?
            History and Closure by FBI,&quot; Investopedia, Oct. 26, 2016.
            Accessed: May 03, 2024. [Online]. Available:
            https://www.investopedia.com/terms/s/silk-road.asp
            <br />
            [20]U. S. S. and E. Commission, &quot;Bats BZX Exchange, Inc.; Order
            Setting Aside Action by Delegated Authority and Disapproving a
            Proposed Rule Change, as Modified by Amendments No. 1 and 2, to List
            and Trade Shares of the Winklevoss Bitcoin Trust&quot;.
            <br />
            [21]&quot;Bloomberg,&quot; Are you a robot?
            https://www.bloomberg.com/news/articles/2019-08-12/sec-delays-cryptocurrency-etf-decisions-citing-market-concerns
            (accessed May 03, 2024).
            <br />
            [22]V. G. Huang, &quot;SEC Delays Decisions on Spot Bitcoin ETF
            Applications,&quot; Wall Street Journal, Nov. 17, 2023.
            https://www.wsj.com/livecoverage/stock-market-today-dow-jones-11-17-2023/card/sec-delays-decisions-on-spot-bitcoin-etf-applications-ho4xwbLGARR1cmY5WhRx
            (accessed May 03, 2024).
            <br />
            [23]&quot;Bitcoin ETF’s 60% surge in Canada signals what’s coming in
            the U.S. – DL News,&quot; Osler, Hoskin &amp; Harcourt LLP.
            https://www.osler.com/en/about-us/press-room/2023/bitcoin-etf-s-60-surge-in-canada-signals-what-s-coming-in-the-u-s-dl-news
            (accessed May 03, 2024).
            <br />
            [24]Reuters, &quot;US SEC Rejects VanEck Spot Bitcoin ETF
            Application for Third Time,&quot; U.S. News &amp; World Report, Mar.
            10, 2023. Accessed: May 03, 2024. [Online]. Available:
            https://www.usnews.com/news/technology/articles/2023-03-10/us-sec-rejects-vaneck-spot-bitcoin-etf-application-for-third-time
            <br />
            [25]P. Kiernan, &quot;Grayscale’s Court Win Over SEC Lifts Hopes for
            Bitcoin ETF Approval,&quot; Wall Street Journal, Aug. 29, 2023.
            https://www.wsj.com/finance/regulation/grayscale-wins-lawsuit-against-sec-over-bitcoin-etf-1b305cfa
            (accessed May 03, 2024).
            <br />
            [26]C. Kim, &quot;SEC approves spot Bitcoin ETFs after much
            hype,&quot; Axios, Jan. 10, 2024. Accessed: May 03, 2024. [Online].
            Available:
            https://www.axios.com/2024/01/10/sec-approves-spot-bitcoin-etfs-after-much-hype
            <br />
            [27]&quot;No bitcoin ETFs at Vanguard? Here’s why,&quot; Vanguard.
            https://corporate.vanguard.com/content/corporatesite/us/en/corp/articles/no-bitcoin-etfs-at-vanguard-heres-why.html
            (accessed May 03, 2024).
            <br />
            [28]B. Lindrea, &quot;BlackRock CEO ’very bullish’ on Bitcoin as its
            ETF crosses $17B,&quot; Cointelegraph, Mar. 28, 2024. Accessed: May
            03, 2024. [Online]. Available:
            https://cointelegraph.com/news/blackrock-bitcoin-etf-fastest-growing-etf-larry-fink
          </p>
        </div>
        <p>Designs by Aceternity UI</p>
      </div>
    </div>
  );
}

// const dummyContent = [
//   {
//     title: "Dec 2017: Chicago Board Options Exchange Bitcoin Futures",
//     description: (
//       <>
//         <p>
//           The Chicago Board Options Exchange (CBOE) and Chicago Mercantile
//           Exchange (CME) made a milestone contribution by establishing Bitcoin
//           futures. Futures are derivatives on securities, which in layman terms,
//           mean an asset that tracks the price of the underlying asset.
//         </p>
//         <br />
//         <p>
//           Futures are similar to betting on the future price or performance, in
//           our case, we are betting on the future price of Bitcoin. The launch of
//           futures provided a strong signal to show growing acceptance of the
//           cryptocurrency by mainstream institutions. Bitcoin was recognized as a
//           commodity similar to gold and silver.
//         </p>
//         <br />
//         <p>
//           In practical terms, Bitcoin futures provide investors with an ability
//           to hedge against market volatility and speculate on future price
//           movements without directly owning Bitcoin. This development could
//           attract more conservative investors who may have been hesitant to
//           engage with Bitcoin due to its perceived risks and lack of regulation.
//         </p>
//         <br />
//         <p>
//           The involvement of reputable exchanges like CBOE and CME lends
//           credibility to the cryptocurrency, addressing some concerns raised by
//           regulators regarding the &quot;black market&quot; and decentralized
//           nature of Bitcoin, which have previously hindered the approval of
//           Bitcoin Spot ETFs. The launch of Bitcoin futures represents a crucial
//           step forward in establishing Bitcoin Spot ETFs by contributing to the
//           growing acceptance and legitimacy of the cryptocurrency.
//         </p>
//       </>
//     ),
//     badge: "React",
//     image:
//       "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   },
//   {
//     title: "Jun 2018: VanEck SolidX Bitcoin Trust Rejected",
//     description: (
//       <>
//         <p>
//           Ex irure dolore veniam ex velit non aute nisi labore ipsum occaecat
//           deserunt cupidatat aute. Enim cillum dolor et nulla sunt exercitation
//           non voluptate qui aliquip esse tempor. Ullamco ut sunt consectetur
//           sint qui qui do do qui do. Labore laborum culpa magna reprehenderit ea
//           velit id esse adipisicing deserunt amet dolore. Ipsum occaecat veniam
//           commodo proident aliqua id ad deserunt dolor aliquip duis veniam sunt.
//         </p>
//         <p>
//           In dolore veniam excepteur eu est et sunt velit. Ipsum sint esse
//           veniam fugiat esse qui sint ad sunt reprehenderit do qui proident
//           reprehenderit. Laborum exercitation aliqua reprehenderit ea sint
//           cillum ut mollit.
//         </p>
//       </>
//     ),
//     badge: "Changelog",
//     image:
//       "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   },
//   {
//     title: "Lorem Ipsum Dolor Sit Amet",
//     description: (
//       <>
//         <p>
//           Ex irure dolore veniam ex velit non aute nisi labore ipsum occaecat
//           deserunt cupidatat aute. Enim cillum dolor et nulla sunt exercitation
//           non voluptate qui aliquip esse tempor. Ullamco ut sunt consectetur
//           sint qui qui do do qui do. Labore laborum culpa magna reprehenderit ea
//           velit id esse adipisicing deserunt amet dolore. Ipsum occaecat veniam
//           commodo proident aliqua id ad deserunt dolor aliquip duis veniam sunt.
//         </p>
//       </>
//     ),
//     badge: "Launch Week",
//     image:
//       "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=3506&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   },
// ];

const dummyContent = [
  {
    title: "Jul 2013: Winklevoss Trust Filing",
    description: (
      <>
        <p>
          The idea of Bitcoin ETFs is not new. The battle towards attaining a
          Bitcoin Spot ETF began in July 2013 [8]. Cameron and Tyler Winklevoss,
          known for their involvement in Facebook, unleashed the idea to
          securities regulators.
        </p>
        <br />
        <p>
          Noting that Bitcoin was only invented in 2008 and the first
          transaction being in 2010, the Winklevosses were incredibly ahead of
          their time in thinking about Bitcoin investments. Regulators though
          would have a difficult time understanding such a new concept.
        </p>
        <br />
        <p>
          Winklevosses’s proposal did not only focus on simply creating a spot
          ETF for more exposure to the public, but also creating a greater
          vision to introduce Bitcoin into the limelight of society [8]. The
          latter point is key in getting approved because the Winklevosses knew
          the “black market” and decentralized activity of Bitcoin is often
          publicized. These implications make regulations difficult to observe
          and understand Bitcoin in a deep view.
        </p>
      </>
    ),
    badge: "Launch Week",
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=3506&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    source:
      "https://www.coindesk.com/markets/2014/05/08/winklevoss-twins-plan-nasdaq-listing-for-bitcoin-etf-in-new-sec-filing/",
    sourceName: "Coindesk",
  },
  {
    title: "Mar 2017: Winklevoss Trust Filing Rejection",
    description: (
      <>
        <p>
          After four years of setting up the filing to the SEC, regulators
          ultimately rejected their application [9]. This event was a major pain
          towards the crypto community as the ETF hyped up much of the price of
          Bitcoin causing an immediate crash afterwards.
        </p>
        <br />
        <p>
          The SEC cited that the market was unregulated and that more
          surveillance of the Bitcoin prices was required. The SEC interprets
          Section 6(b)(5) to require that an exchange traded product enter into
          a surveillance-sharing agreement with a regulated market of
          significant size related to the underlying asset [9]. Mainly the
          concern was for fraud and manipulation of the coin’s price and the
          regulation on trading Bitcoin [10].
        </p>
        <br />
        <p>
          The SEC’s filing was not wrong here as Bitcoin operations completely
          lack regulation in the United States. For instance, all Bitcoins are
          not FDIC insured, meaning that if something were to happen to the
          exchange, all Bitcoin lost would not be able to be recovered [11].
          Many of the lack of regulation is how Bitcoin cannot be solely
          categorized into a single asset category. Even so, the SEC did not
          provide much further information or work to assist in managing Bitcoin
          trading.
        </p>
        <br />
        <p>
          One major concern about the SEC’s ruling is that it might encourage
          Bitcoin and crypto businesses to move out of the United States and
          into other countries with more pronounced regulations.
        </p>
        <br />
        <p>
          For example, in Japan, in Apr 2017, the country recognized Bitcoin as
          a legal form of payment, which allows exchanges to manage the payments
          [12]. This advancement was a major win for Bitcoin exposure and
          surveillance. A large country such as Japan recognizing Bitcoin as a
          legal form of payment increases international attention to how
          sustainable and strong the currency might be. By allowing payments as
          a valid form of currency, the Japanese are able to track transactions
          and underlying payments made by Bitcoin.
        </p>
        <br />
        <p>
          The recognition of Bitcoin has been lacking in the United States.
          Investopedia calls Bitcoin a “legal platypus” that does not fit neatly
          into any asset category. They are treated as financial instruments. In
          the United States, Bitcoin is recognized as either utility (used for
          an underlying purpose), securities (equity or share in a company),
          governance (specific rights on the blockchain), or transactional (for
          financial transactions). The main issue is that Bitcoin has been
          mainly seen as tokens by many exchanges and companies that use the
          currency in order to bypass many fees that come from recognizing
          Bitcoin as the other instruments [13]
        </p>
        <br />
        <p>
          Through the payments department in Japan, Bitcoin has been dedicated
          and thought about deeply. Instead of pushing the asset aside like the
          United States have, Japan has been proactive in their attempts to
          regulate and understand Bitcoin. The Japanese Financial Services
          Agency (FSA) requires cryptocurrency exchanges to register and adhere
          to specific regulations [12]. These regulations include customer
          protection measures, such as the maintenance of robust security
          protocols and the segregation of customer funds from corporate assets.
        </p>
      </>
    ),
    badge: "Launch Week",
    source: "https://mashable.com/article/bitcoin-etf-rejected",
    sourceName: "Mashable",
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=3506&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Dec 2017: Chicago Board Options Exchange Bitcoin Futures",
    description: (
      <>
        <p>
          The Chicago Board Options Exchange (CBOE) and Chicago Mercantile
          Exchange (CME) made a milestone contribution by establishing Bitcoin
          futures [14]. Futures are derivatives on securities, which in layman
          terms, mean an asset that tracks the price of the underlying asset.
        </p>
        <br />
        <p>
          Futures are similar to betting on the future price or performance, in
          our case, we are betting on the future price of Bitcoin. The launch of
          futures provided a strong signal to show growing acceptance of the
          cryptocurrency by mainstream institutions. Bitcoin was recognized as a
          commodity similar to gold and silver.
        </p>
        <br />
        <p>
          In practical terms, Bitcoin futures provide investors with an ability
          to hedge against market volatility and speculate on future price
          movements without directly owning Bitcoin. This development could
          attract more conservative investors who may have been hesitant to
          engage with Bitcoin due to its perceived risks and lack of regulation.
        </p>
        <br />
        <p>
          The involvement of reputable exchanges like CBOE and CME lends
          credibility to the cryptocurrency, addressing some concerns raised by
          regulators regarding the &quot;black market&quot; and decentralized
          nature of Bitcoin, which have previously hindered the approval of
          Bitcoin Spot ETFs. The launch of Bitcoin futures represents a crucial
          step forward in establishing Bitcoin Spot ETFs by contributing to the
          growing acceptance and legitimacy of the cryptocurrency.
        </p>
      </>
    ),
    source:
      "https://www.reuters.com/technology/exchange-operator-cboe-gets-nod-launch-leveraged-crypto-derivative-products-2023-06-05/",
    sourceName: "Reuters",
    badge: "Launch Week",
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=3506&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Jun 2018: VanEck SolidX Bitcoin Trust Attempt",
    description: (
      <>
        <p>
          Besides the Winkevoss Brothers, attempts to open a Bitcoin ETF have
          been abundant. As aforementioned, a Bitcoin ETF would expose tons of
          investors into the Bitcoin market that would not have been possible
          before. One prominent attempt is the VanEck SolidX Bitcoin Trust [15].
        </p>
        <br />
        <p>
          VanEck argued that the Bitcoin markets have had sufficient time to
          mature. The main part of highlighting VanEck in particular is their
          focus on institutionalizing Bitcoin through large asset investments.
          Each share is planned to be around $200,000 worth of Bitcoin [16].
        </p>
        <br />
        <p>
          VanEck highlights another pro of Bitcoin ETFs in its exposure to
          institutionalized investors [16]. Pro-Bitcoin people would encourage
          such activity because it would artificially drive prices up due to the
          large sum of money that will be put into Bitcoin. VanEck's CEO
          believes that bitcoin has emerged as a legitimate investment option,
          and a properly constructed physically-backed bitcoin ETF will provide
          exposure to the price of bitcoin while offering insurance to protect
          shareholders against operational risks.
        </p>
        <br />
        <p>
          Additionally, VanEck partnered with SolidX, a prominent financial
          technology company. The hope is that with such a proposal in combining
          the old finance and new finance, approval chances would be higher.
        </p>
      </>
    ),
    source:
      "https://bitcoinmagazine.com/markets/vaneck-to-launch-second-bitcoin-futures-etf",
    sourceName: "Bitcoin Magazine",
    badge: "Launch Week",
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=3506&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Dec 2018: Winklevoss Trust Filing Second Rejection",
    description: (
      <>
        <p>
          The Winkevoss Brothers attempted to file another ETF after their first
          rejection. After reviewing their first rejection, the twins attempted
          to improve upon the reasons that they were rejected for.
        </p>
        <br />
        <p>
          In this attempt, the twins proposed a surveillance-sharing agreement
          with the Gemini Exchange, a regulated cryptocurrency exchange founded
          by the Winklevoss twins, to monitor potential market manipulation
          [17]. The exchange itself &quot;allows users to buy and sell various
          digital currencies, either with digital currency (for example, using
          bitcoin to buy litecoin) or using fiat currency like U.S. dollars to
          buy digital currencies.&quot; [18] Using existing systems that the
          twins already have in stock helps boost the SEC’s confidence that they
          are the right people to start up the new Bitcoin ETF.
        </p>
        <br />
        <p>
          Additionally, they argued that the Bitcoin market had matured
          significantly since their first application and that the proposed ETF
          would be in the public interest. The concern of Bitcoin’s maturity is
          not new. Back in 2013, when the twins first introduced the ETF, many
          publications were talking about Bitcoin’s connections to terrorism and
          crime [19]. This concern is still very prevalent today. But in 2013,
          the Silk Road, a website that used Bitcoin to transact illegal
          substances and crime, was shut down. The image of Bitcoin was
          incredibly hurt by many transactions being undocumented and the system
          being a place where people can hide their identities to commit crime.
          The twins argued that the new times and as many of these illegal sites
          were being cracked down on, Bitcoin would become a more correct and
          right system.
        </p>
        <br />
        <p>
          Another major point the SEC cited was that the markets were "uniquely
          resistant to manipulation” [20]. Bitcoin was seen as an extremely
          volatile form of asset as the price went up and down without much
          technical fundamental understanding besides the chain itself. Unlike
          other forms of asset, much research on technical information about
          Bitcoin is unknown since the coin is hard to surveillance. The SEC is
          concerned about abilities to perform attacks and hijacks which may
          cause the coin to fail due to how new the technology still is.
        </p>
        <br />
        <p>
          Through this period, the SEC continues to take a very conservative
          approach when dealing with cryptocurrencies. Though the conservatism
          which the SEC takes could be detrimental as we look into the future
          with events such as FTX and many crypto scams on Americans who try to
          invest and use the new technology.
        </p>
      </>
    ),
    source:
      "https://www.bloomberg.com/news/articles/2018-07-26/sec-rejects-winklevoss-twins-request-to-launch-bitcoin-etf",
    sourceName: "Bloomberg",
    badge: "React",
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Aug 2019 - SEC Delays Decision on Bitcoin ETFs",
    description: (
      <>
        <p>
          The SEC delayed its decision on three Bitcoin ETF proposals from
          Bitwise Asset Management, VanEck/SolidX, and Wilshire Phoenix [21].
          This delay was part of a pattern where the SEC sought more time to
          consider the regulatory implications. As pressures move towards the
          SEC approving the Bitcoin ETFs, the regulators can only delay their
          decision in order to ensure they are making the correct one. With more
          time, the SEC hopes to get more clarity on whether or not to actually
          approve the ETF.
        </p>
        <br />
        <p>
          The pattern of delays is also common for the SEC [22]. Delays signal a
          sign of unconfidence in the SEC’s decision as the market could still
          be very volatile. Without much safety, the SEC feels like they can't
          properly monitor the market and protect investors. The SEC may feel
          that exposing the risk would not be beneficial to the market and
          investor as the market may be able to be manipulated. Even after a few
          years since the technology has been released, the SEC often cites the
          same reasonings and uncertainty of the same surveillance to ensure
          that investors are protected.
        </p>
      </>
    ),
    source: "https://www.investopedia.com/terms/s/sec.asp",
    sourceName: "Investopedia",
    badge: "Changelog",
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Oct 2021: ProShares Bitcoin Strategy ETF (BITO) Approval",
    description: (
      <>
        <p>
          The SEC approved the first Bitcoin futures ETF, which began trading on
          October 19, 2021. This ETF does not invest directly in Bitcoin;
          instead, it invests in Bitcoin futures contracts traded on the Chicago
          Mercantile Exchange (CME). The approval was a landmark moment for the
          crypto industry, as it allowed investors to gain exposure to
          Bitcoin&apos;s price movements through a regulated investment vehicle.
        </p>
        <br />
        <p>
          The difference between the futures ETF and the spot ETF is that the
          futures ETF bought assets of the futures instead of actual Bitcoin.
        </p>
        <br />
        <p>
          The developments in the commodity market allow for much-wanted
          surveillance and acceptance that the SEC would have been looking for
          for a future investment into Bitcoin. Many saw this event as the
          opening towards the Bitcoin ETF next.
        </p>
        <br />
        <p>
          Canadian markets have already invested in Bitcoin ETFs for a while
          [23]. The success of the Canadian ETFs could be a signal that an
          eventual approval of the Bitcoin ETF would be available. Regulators in
          Canada recognized the importance of adapting the ETF as soon as
          possible to gain more exposure to the Bitcoin market. Though, Canadian
          regulators may be putting Canadian investors at risk, a concern that
          the SEC is likely considering. Overall, Canada has more laid-back
          regulations on Bitcoin technologies.
        </p>
      </>
    ),
    source:
      "https://www.businesswire.com/news/home/20211018005280/en/ProShares-to-Launch-the-First-U.S.-Bitcoin-Linked-ETF-on-October-19",
    sourceName: "Business Wire",
    badge: "React",
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Mar 2023: VanEck SolidX Bitcoin Trust Rejection",
    description: (
      <>
        <p>
          After a few delays, the rejection of the VanEck SolidX ETF came, and
          similar reasons were cited for why the SEC made this decision [24].
        </p>
        <br />
        <p>
          Similar to many other ETFs before the VanEck SolidX Bitcoin Trust, the
          SEC rejected the ETF proposal because the SEC was concerned about
          market manipulation and lack of surveillance. Over the years, this
          concern shows that the SEC has not changed much on the regulatory
          stance of Bitcoin as an asset.
        </p>
      </>
    ),
    source: "https://www.etfstream.com/companies/solid-x",
    sourceName: "ETF Stream",
    badge: "Changelog",
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Aug 2023: Grayscale Wins Court Case Against SEC",
    description: (
      <>
        <p>
          After Grayscale was rejected for their ETF attempt earlier in the
          year, Grayscale sued the regulators, arguing that the approvals of the
          futures ETF were enough for spot ETFs [25]. The ruling forces the SEC
          to rethink future applications for spot ETFs, giving the market hope
          that it would actually happen.
        </p>
        <br />
        <p>
          Grayscale stated that the ruling was: &quot;a monumental step for
          American investors, the Bitcoin ecosystem, and all those who have been
          advocating for Bitcoin exposure through the added protections of the
          ETF wrapper&quot; [25].
        </p>
        <br />
        <p>
          The markets were extremely receptive to the results, and Bitcoin’s
          price increased greatly in anticipation of the ETF approval. The
          decision of the court also shows how the SEC&apos;s view on Bitcoin
          may have faltered from their previous outlook due to the lawsuit.
        </p>
      </>
    ),
    source:
      "https://cryptoslate.com/grayscale-acknowledges-spot-bitcoin-etf-approval-says-trading-begins-thursday/",
    sourceName: "Cryptoslate",
    badge: "Launch Week",
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Jan 2024: SEC Approves Bitcoin Spot ETF",
    description: (
      <>
        <p>
          In a landmark decision, the SEC decides to approve all Bitcoin Spot
          ETFs that were coming in. Coming after years of proposals, delays, and
          rejections, we see the SEC accepting the maintenance of the ETFs [26].
        </p>
        <br />
        <p>
          Gensler, the chairman of the SEC, stated, &quot;Investors should
          remain cautious about the myriad risks associated with bitcoin and
          products whose value is tied to crypto&quot; [26], signaling still his
          conservative approach in regulating the currency.
        </p>
      </>
    ),
    source:
      "https://www.engadget.com/sec-approves-bitcoin-etfs-for-real-this-time-224125584.html",
    sourceName: "Engadget",
    badge: "Launch Week",
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
