"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Award, Heart, Shield, Zap } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export default function AboutPage() {
  const { t } = useLanguage()

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary py-16 text-primary-foreground md:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="mb-6 text-4xl font-bold leading-tight text-balance md:text-5xl">{t.aboutTitle}</h1>
              <p className="text-lg text-primary-foreground/90 leading-relaxed">{t.aboutSubtitle}</p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <h2 className="mb-8 text-center text-3xl font-bold text-foreground md:text-4xl">{t.ourMission}</h2>
              <div className="space-y-6">
                <p className="text-center text-lg text-muted-foreground leading-relaxed italic font-medium">
                  {t.missionText1}
                </p>
                <p className="text-center text-lg text-muted-foreground leading-relaxed">{t.missionText2}</p>
                <p className="text-center text-lg text-muted-foreground leading-relaxed font-medium">
                  {t.missionText3}
                </p>
                <p className="text-center text-lg text-muted-foreground leading-relaxed">{t.missionText4}</p>
                <p className="text-center text-lg text-muted-foreground leading-relaxed">{t.missionText5}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="bg-secondary py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center text-3xl font-bold text-foreground md:text-4xl">{t.ourCoreValues}</h2>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <Card className="border-border">
                <CardContent className="p-6 text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <Award className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-card-foreground">{t.excellence}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{t.excellenceDesc}</p>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardContent className="p-6 text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <Heart className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-card-foreground">{t.passion}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{t.passionDesc}</p>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardContent className="p-6 text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <Shield className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-card-foreground">{t.integrity}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{t.integrityDesc}</p>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardContent className="p-6 text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <Zap className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-card-foreground">{t.growth}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{t.growthDesc}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* History Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <h2 className="mb-8 text-center text-3xl font-bold text-foreground md:text-4xl">{t.ourHistory}</h2>

              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                      2000
                    </div>
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-bold text-foreground">{t.foundation}</h3>
                    <p className="text-muted-foreground leading-relaxed">{t.foundationDesc}</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                      2005
                    </div>
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-bold text-foreground">{t.expansion}</h3>
                    <p className="text-muted-foreground leading-relaxed">{t.expansionDesc}</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                      2015
                    </div>
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-bold text-foreground">{t.newFacilities}</h3>
                    <p className="text-muted-foreground leading-relaxed">{t.newFacilitiesDesc}</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                      2024
                    </div>
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-bold text-foreground">{t.today}</h3>
                    <p className="text-muted-foreground leading-relaxed">{t.todayDesc}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="bg-secondary py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="mb-6 text-3xl font-bold text-foreground md:text-4xl">{t.ourLeadership}</h2>
              <p className="mb-12 text-muted-foreground leading-relaxed">{t.leadershipDesc}</p>

              <div className="grid gap-8 md:grid-cols-3">
                <Card className="border-border">
                  <CardContent className="p-6">
                    <div className="mb-4 h-32 w-32 mx-auto overflow-hidden rounded-full bg-muted">
                      <img
                        src="/professional-coach-portrait.png"
                        alt="Director"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <h3 className="mb-1 text-lg font-bold text-card-foreground">John Smith</h3>
                    <p className="mb-2 text-sm text-primary font-medium">{t.executiveDirector}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{t.executiveDirectorDesc}</p>
                  </CardContent>
                </Card>

                <Card className="border-border">
                  <CardContent className="p-6">
                    <div className="mb-4 h-32 w-32 mx-auto overflow-hidden rounded-full bg-muted">
                      <img
                        src="/female-coach-portrait.jpg"
                        alt="Technical Director"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <h3 className="mb-1 text-lg font-bold text-card-foreground">Maria Garcia</h3>
                    <p className="mb-2 text-sm text-primary font-medium">{t.technicalDirector}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{t.technicalDirectorDesc}</p>
                  </CardContent>
                </Card>

                <Card className="border-border">
                  <CardContent className="p-6">
                    <div className="mb-4 h-32 w-32 mx-auto overflow-hidden rounded-full bg-muted">
                      <img
                        src="/sports-director-portrait.png"
                        alt="Operations Director"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <h3 className="mb-1 text-lg font-bold text-card-foreground">David Chen</h3>
                    <p className="mb-2 text-sm text-primary font-medium">{t.operationsDirector}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{t.operationsDirectorDesc}</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
