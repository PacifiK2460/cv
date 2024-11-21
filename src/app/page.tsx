import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CommandMenu } from "@/components/command-menu";
import { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { ExternalLink, GlobeIcon, LinkIcon, MailIcon, PhoneIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RESUME_DATA } from "@/data/resume-data";
import { ProjectCard } from "@/components/project-card";
import Link from 'next/link'

import Donut from "@/components/donut";
import { CibCisco } from "@/components/icons/cisco";

export const metadata: Metadata = {
  title: `${RESUME_DATA.name} | ${RESUME_DATA.about}`,
  description: RESUME_DATA.summary["en"],
};

export default function Page() {
  return (
    <main className="container relative mx-auto scroll-my-12 overflow-auto p-4 print:p-12 md:p-16">
      <section className="mx-auto w-full max-w-2xl space-y-8 bg-white print:space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex-1 space-y-1.5">
            <h1 className="text-2xl font-bold">{RESUME_DATA.name}</h1>
            <p className="max-w-md text-pretty font-mono text-sm text-muted-foreground print:text-[12px]">
              {RESUME_DATA.about["en"]}
            </p>
            <p className="max-w-md items-center text-pretty font-mono text-xs text-muted-foreground">
              <a
                className="inline-flex gap-x-1.5 align-baseline leading-none hover:underline"
                href={RESUME_DATA.locationLink}
                target="_blank"
              >
                <GlobeIcon className="size-3" />
                {RESUME_DATA.location}
              </a>
            </p>
            <div className="flex gap-x-1 pt-1 font-mono text-sm text-muted-foreground print:hidden">
              {RESUME_DATA.contact.email ? (
                <Button
                  className="size-8"
                  variant="outline"
                  size="icon"
                  asChild
                >
                  <a href={`mailto:${RESUME_DATA.contact.email}`}>
                    <MailIcon className="size-4" />
                  </a>
                </Button>
              ) : null}
              {RESUME_DATA.contact.tel ? (
                <Button
                  className="size-8"
                  variant="outline"
                  size="icon"
                  asChild
                >
                  <a href={`tel:${RESUME_DATA.contact.tel}`}>
                    <PhoneIcon className="size-4" />
                  </a>
                </Button>
              ) : null}
              {RESUME_DATA.contact.social.map((social) => (
                <Button
                  key={social.name}
                  className="size-8"
                  variant="outline"
                  size="icon"
                  asChild
                >
                  <a href={social.url}>
                    <social.icon className="size-4" />
                  </a>
                </Button>
              ))}
            </div>
            <div className="hidden flex-col gap-x-1 font-mono text-sm text-muted-foreground print:flex print:text-[12px]">
              {RESUME_DATA.contact.email ? (
                <a href={`mailto:${RESUME_DATA.contact.email}`} key={RESUME_DATA.contact.email}>
                  <span className="underline">{RESUME_DATA.contact.email}</span>
                </a>
              ) : null}
              {RESUME_DATA.contact.tel ? (
                <a href={`tel:${RESUME_DATA.contact.tel}`} key={RESUME_DATA.contact.tel}>
                  <span className="underline">{RESUME_DATA.contact.tel}</span>
                </a>
              ) : null}
              {RESUME_DATA.contact.social.map((social) => (
                <a href={`${social.url}`} key={social.url}>
                  <span className="underline">{social.url}</span>
                </a>
              ))}
            </div>
          </div>
          <Avatar className="size-28">
            <AvatarImage alt={RESUME_DATA.name} src={RESUME_DATA.avatarUrl} />
            <AvatarFallback>{RESUME_DATA.initials}</AvatarFallback>
          </Avatar>
        </div>
        <Section>
          <h2 className="text-xl font-bold">About</h2>
          <p className="text-pretty font-mono text-sm text-muted-foreground print:text-[12px]">
            {RESUME_DATA.summary["en"]}
          </p>
        </Section>
        <Section>
          <h2 className="text-xl font-bold">Skills</h2>
          <div className="flex flex-wrap gap-1">
            {RESUME_DATA.skills.map((skill) => {
              return (
                <Badge className="print:text-[10px]" key={skill}>
                  {skill}
                </Badge>
              );
            })}
          </div>
        </Section>

        <Section>
          <h2 className="text-xl font-bold">Competitions</h2>
          <div className="flex flex-wrap gap-1">
            {RESUME_DATA.competitions.map((skill) => {
              return (
                <Badge className="print:text-[10px]" key={skill["en"]}>
                  {skill["en"]}
                </Badge>
              );
            })}
          </div>
        </Section>

        <Section>
          <h2 className="text-xl font-bold">Certifications</h2>
          <div className="flex flex-wrap gap-1">
            {
              RESUME_DATA.certifications.map((cert) => {
                return (
                  <>
                    <Card className="gap-2 flex flex-row overflow-hidden border border-muted p-3 cursor-pointer hover:bg-gray-100 h-full w-full" key={cert.title}>
                      <CardContent className="flex flex-row gap-2 text-xs print:text-[10px] h-full w-full" key={cert.title}>
                        <div className="flex-none place-self-center h-full" key={cert.title}>
                          <cert.issuerIcon className="w-10 h-10" key={cert.title} />
                        </div>
                        <div className="grow flex flex-col" key={cert.title}>
                          <CardTitle className="text-lg font-bold text-black flex flex-row gap-2 align-middle items-center" key={cert.title}>
                            <Link href={cert.credentialURL} key={cert.title} className="h-full w-full" prefetch target="_blank">
                              {cert.title}
                            </Link>
                          </CardTitle>
                          <div key={cert.title}>
                            <p key={cert.title}>{cert.issuer}</p>
                            <p key={cert.title}>Issued: {cert.issueDate}</p>
                            <Link href={cert.credentialURL} className="hidden print:block">URL: {cert.credentialURL}</Link>
                          </div>
                        </div>
                        <div className="flex-none place-self-center h-full print:hidden">
                          <LinkIcon className="size-4" />
                        </div>
                      </CardContent>
                    </Card>
                  </>

                )
              })
            }
          </div>
        </Section>

        <Section>
          <h2 className="text-xl font-bold">Work Experience</h2>
          {RESUME_DATA.work.map((work) => {
            return (
              <Card key={work.company}>
                <CardHeader>
                  <div className="flex items-center justify-between gap-x-2 text-base">
                    <h3 className="inline-flex items-center justify-center gap-x-1 font-semibold leading-none">
                      <a className="hover:underline" href={work.link}>
                        {work.company}
                      </a>

                      <span className="inline-flex gap-x-1">
                        {work.badges.map((badge) => (
                          <Badge
                            variant="secondary"
                            className="align-middle text-xs print:text-[8px] print:leading-tight print:px-1 print:py-0.5"
                            key={badge}
                          >
                            {badge}
                          </Badge>
                        ))}
                      </span>
                    </h3>
                    <div className="text-sm tabular-nums text-gray-500">
                      {work.start} - {work.end ?? "Present"}
                    </div>
                  </div>

                  <h4 className="font-mono text-sm leading-none print:text-[12px]">
                    {work.title}
                  </h4>
                </CardHeader>
                <CardContent className="mt-2 text-xs print:text-[10px]">
                  {work.description}
                </CardContent>
              </Card>
            );
          })}
        </Section>
        <Section>
          <h2 className="text-xl font-bold">Education</h2>
          {RESUME_DATA.education.map((education) => {
            return (
              <Card key={education.school}>
                <CardHeader>
                  <div className="flex items-center justify-between gap-x-2 text-base">
                    <h3 className="font-semibold leading-none">
                      {education.school}
                    </h3>
                    <div className="text-sm tabular-nums text-gray-500">
                      {education.start} - {education.end}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="mt-2 print:text-[12px]">
                  {education.degree}
                </CardContent>
              </Card>
            );
          })}
        </Section>

        <Section className="">
          <h2 className="text-xl font-bold">Projects</h2>
          <div className="-mx-3 grid grid-cols-1 gap-3 print:grid-cols-3 print:gap-2 md:grid-cols-2 lg:grid-cols-3">
            {RESUME_DATA.projects.map((project) => {
              return (
                <ProjectCard
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  tags={project.techStack}
                  link={"link" in project ? project.link : undefined}
                  repo={project.repo}
                />
              );
            })}
          </div>
        </Section>
        <div className="w-full flex items-center justify-center print:hidden">
          <Donut
            frameInterval={32}
            scaleX={2}
          />
        </div>
      </section>

      <CommandMenu
        links={[
          {
            url: RESUME_DATA.personalWebsiteUrl,
            title: "Personal Website",
          },
          ...RESUME_DATA.contact.social.map((socialMediaLink) => ({
            url: socialMediaLink.url,
            title: socialMediaLink.name,
          })),
        ]}
      />
    </main>
  );
}
