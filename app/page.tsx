import { Masthead } from "@/components/Masthead";
import { ThumbIndex } from "@/components/ThumbIndex";
import { Hero } from "@/components/Hero";
import { Resolve } from "@/components/Resolve";
import {
  DocumentSheet,
  Trust,
  Work,
  Person,
  Membership,
  Colophon,
} from "@/components/Sections";
import {
  copy,
  fares,
  decided,
  decidedReasoning,
  considered,
  survivors,
  rejected,
  media,
} from "@/lib/content";

export default function Page() {
  return (
    <>
      <Masthead banner={copy.effectiveBanner} tail={copy.wordmarkTail} />
      <ThumbIndex />

      <main>
        <Hero
          rows={fares}
          headline={copy.headline}
          subhead={copy.subhead}
          primaryCta={copy.primaryCta}
          secondaryCta={copy.secondaryCta}
          considered={considered}
        />

        <Resolve
          rows={fares}
          decided={decided}
          considered={considered}
          heading={copy.resolveSection.heading}
          body={copy.resolveSection.body}
          beforeLabel={copy.resolveSection.beforeLabel}
          afterLabel={copy.resolveSection.afterLabel}
        />

        <DocumentSheet
          heading={copy.documentSection.heading}
          body={copy.documentSection.body}
          skyLabel={copy.documentSection.skyLabel}
          stayLabel={copy.documentSection.stayLabel}
          decided={decided}
          reasoning={decidedReasoning}
          media={media}
        />

        <Trust
          heading={copy.trustSection.heading}
          body={copy.trustSection.body}
          ledgerIn={copy.trustSection.ledgerIn}
          ledgerOut={copy.trustSection.ledgerOut}
          pullQuote={copy.trustSection.pullQuote}
        />

        <Work
          heading={copy.workSection.heading}
          body={copy.workSection.body}
          considered={considered}
          survivors={survivors}
          rejected={rejected}
        />

        <Person
          heading={copy.personSection.heading}
          body={copy.personSection.body}
          concierge={copy.personSection.concierge}
          conciergeRole={copy.personSection.conciergeRole}
          conciergeBio={copy.personSection.conciergeBio}
          portrait={media.desk}
          credit={media.deskCredit}
        />

        <Membership
          heading={copy.membership.heading}
          price={copy.membership.price}
          priceQualifier={copy.membership.priceQualifier}
          includes={copy.membership.includes}
          excludes={copy.membership.excludes}
          closeLine={copy.membership.closeLine}
          primaryCta={copy.primaryCta}
        />
      </main>

      <Colophon
        colophon={copy.colophon}
        footnotes={copy.footnotes}
        banner={copy.effectiveBanner}
      />
    </>
  );
}
