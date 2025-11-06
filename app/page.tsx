"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { Users, Trophy, Target, Calendar } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export default function HomePage() {
  const { t } = useLanguage()

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-primary py-20 text-primary-foreground md:py-32">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="mb-6 text-4xl font-bold leading-tight text-balance md:text-6xl">{t.heroTitle}</h1>
              <p className="mb-8 text-lg leading-relaxed text-primary-foreground/90 md:text-xl">{t.heroDescription}</p>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/about">{t.learnMore}</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
                  asChild
                >
                  <Link href="/contact">{t.joinUs}</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">{t.whatWeOffer}</h2>
              <p className="mx-auto max-w-2xl text-muted-foreground leading-relaxed">{t.whatWeOfferDescription}</p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <Card className="border-border transition-shadow hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-card-foreground">{t.youthDevelopment}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{t.youthDevelopmentDesc}</p>
                </CardContent>
              </Card>

              <Card className="border-border transition-shadow hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Trophy className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-card-foreground">{t.competitiveLeagues}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{t.competitiveLeaguesDesc}</p>
                </CardContent>
              </Card>

              <Card className="border-border transition-shadow hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-card-foreground">{t.professionalCoaching}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{t.professionalCoachingDesc}</p>
                </CardContent>
              </Card>

              <Card className="border-border transition-shadow hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Calendar className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-card-foreground">{t.yearRoundPrograms}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{t.yearRoundProgramsDesc}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* About Preview Section */}
        <section className="bg-secondary py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <h2 className="mb-6 text-3xl font-bold text-foreground md:text-4xl">{t.aboutOurAssociation}</h2>
                <p className="mb-4 text-muted-foreground leading-relaxed">{t.aboutPreview1}</p>
                <p className="mb-6 text-muted-foreground leading-relaxed">{t.aboutPreview2}</p>
                <Button asChild>
                  <Link href="/about">{t.readFullStory}</Link>
                </Button>
              </div>
              <div className="relative h-64 overflow-hidden rounded-lg bg-muted lg:h-96">
                <img src="/football-team-celebrating.jpg" alt="Football team" className="h-full w-full object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl rounded-lg bg-primary p-8 text-center text-primary-foreground md:p-12">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">{t.readyToJoin}</h2>
              <p className="mb-8 text-lg text-primary-foreground/90 leading-relaxed">{t.readyToJoinDesc}</p>
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">{t.contactUsToday}</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
