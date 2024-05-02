"use client";
import React from "react";
// import { calsans } from "@/fonts/calsans";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { EvervaultCard, Icon } from "../app/components/evervault-card";
import { TracingBeam } from "../app/components/tracing-beam";

export default function Page() {
  return (
    <div>
      <div className="mx-36">
        <div className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start mx-auto p-4 relative h-[30rem]">
          <EvervaultCard text="The evolution of Bitcoin exchange-traded funds and implications for the regulation of cryptocurrencies" />
        </div>

        <div>
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
          <p>
            Bitcoin as an asset
            <br />
            One key aspect of Bitcoin is how the cryptocurrency is treated much
            more as an asset class or investment rather than a method of
            transaction. In present-day, not many people use bitcoins for
            transactions. According to fundera, the United States only houses
            2,300 companies that accept Bitcoin. In fact, South Dakota only has
            one business that accepts bitcoin. [2] Looking at transactions
            around the world, Bitcoin only has about 507,622 per day [3] while
            credit cards alone manage about 54.8 billion transactions per day
            [4]. Yet Bitcoin still has a dominating presence in how many people
            put money into the asset. As of April 10, 2024, the combined value
            of Bitcoin was about $1.39 trillion [5].
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

      <TracingBeam className="px-6">
        <div className="max-w-2xl mx-auto antialiased pt-4 relative">
          {dummyContent.map((item, index) => (
            <div key={`content-${index}`} className="mb-10">
              <h2 className="bg-black text-white rounded-full text-lg w-fit px-4 py-1 mb-4">
                {item.title}
              </h2>

              {/* <p>{item.title}</p> */}

              <div className="text-sm  prose prose-sm dark:prose-invert">
                {item?.image && (
                  <Image
                    src={item.image}
                    alt="blog thumbnail"
                    height="1000"
                    width="1000"
                    className="rounded-lg mb-10 object-cover"
                  />
                )}
                {item.description}
              </div>
            </div>
          ))}
        </div>
      </TracingBeam>
    </div>
  );
}

const dummyContent = [
  {
    title: "Dec 2017: Chicago Board Options Exchange Bitcoin Futures",
    description: (
      <>
        <p>
          The Chicago Board Options Exchange (CBOE) and Chicago Mercantile
          Exchange (CME) made a milestone contribution by establishing Bitcoin
          futures. Futures are derivatives on securities, which in layman terms,
          mean an asset that tracks the price of the underlying asset.
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
    badge: "React",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Jun 2018: VanEck SolidX Bitcoin Trust Rejected",
    description: (
      <>
        <p>
          Ex irure dolore veniam ex velit non aute nisi labore ipsum occaecat
          deserunt cupidatat aute. Enim cillum dolor et nulla sunt exercitation
          non voluptate qui aliquip esse tempor. Ullamco ut sunt consectetur
          sint qui qui do do qui do. Labore laborum culpa magna reprehenderit ea
          velit id esse adipisicing deserunt amet dolore. Ipsum occaecat veniam
          commodo proident aliqua id ad deserunt dolor aliquip duis veniam sunt.
        </p>
        <p>
          In dolore veniam excepteur eu est et sunt velit. Ipsum sint esse
          veniam fugiat esse qui sint ad sunt reprehenderit do qui proident
          reprehenderit. Laborum exercitation aliqua reprehenderit ea sint
          cillum ut mollit.
        </p>
      </>
    ),
    badge: "Changelog",
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Lorem Ipsum Dolor Sit Amet",
    description: (
      <>
        <p>
          Ex irure dolore veniam ex velit non aute nisi labore ipsum occaecat
          deserunt cupidatat aute. Enim cillum dolor et nulla sunt exercitation
          non voluptate qui aliquip esse tempor. Ullamco ut sunt consectetur
          sint qui qui do do qui do. Labore laborum culpa magna reprehenderit ea
          velit id esse adipisicing deserunt amet dolore. Ipsum occaecat veniam
          commodo proident aliqua id ad deserunt dolor aliquip duis veniam sunt.
        </p>
      </>
    ),
    badge: "Launch Week",
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=3506&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
