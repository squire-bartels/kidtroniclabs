import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram, Linkedin, Video } from "lucide-react"
import Link from "next/link"

export function ContactInfo() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          {/* Contact Information */}
          <Card>
            <CardContent className="p-8 space-y-6">
              <div>
                <h3 className="font-serif text-2xl font-bold text-foreground mb-6">Contact Information</h3>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Visit Us</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      43 Bathur St. East Legon
                      <br />
                      Accra, Ghana
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Phone</h4>
                    <div className="text-muted-foreground text-sm">
                      <Link href="tel:0599717102" className="hover:text-foreground transition-colors">
                        0599717102
                      </Link>
                      <br />
                      <Link href="tel:0572416161" className="hover:text-foreground transition-colors">
                        0572416161
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-chart-3/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-chart-3" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Email</h4>
                    <Link href="mailto:kidtroniclabs@gmail.com" className="text-muted-foreground text-sm hover:text-foreground transition-colors">
                      kidtroniclabs@gmail.com
                    </Link>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-chart-4/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-chart-4" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Office Hours</h4>
                    <p className="text-muted-foreground text-sm">
                      Monday - Friday: 8:00 AM - 6:00 PM
                      <br />
                      Saturday: 9:00 AM - 4:00 PM
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Map Placeholder */}
          <Card>
            <CardContent className="p-0">
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                <div className="text-center space-y-2">
                  <MapPin className="w-12 h-12 text-muted-foreground mx-auto" />
                  <p className="text-muted-foreground">Interactive Map</p>
                  <p className="text-sm text-muted-foreground">43 Bathur St. East Legon, Accra, Ghana</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Social Media */}
          <Card>
            <CardContent className="p-8">
              <div className="space-y-6">
                <h3 className="font-serif text-xl font-bold text-foreground">Follow Us</h3>
                <p className="text-muted-foreground text-sm">
                  Stay connected and get the latest updates on our programs and STEM education resources.
                </p>
                <div className="flex gap-3">
                  <Button variant="outline" size="sm" className="bg-transparent" asChild>
                    <Link href="https://www.linkedin.com/company/kidtroniclabs/" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="w-4 h-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="sm" className="bg-transparent" asChild>
                    <Link href="https://www.instagram.com/kidtroniclabs/" target="_blank" rel="noopener noreferrer">
                      <Instagram className="w-4 h-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="sm" className="bg-transparent" asChild>
                    <Link href="https://www.tiktok.com/@kidtroniclabs?_t=ZM-90InLFqlWG3&_r=1" target="_blank" rel="noopener noreferrer">
                      <div className="w-4 h-4 flex items-center justify-center">
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                        </svg>
                      </div>
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
