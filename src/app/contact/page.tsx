import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ResponsiveMap } from "@/components/responsive-map";

export default function ContactPage() {
    return (
        <div className="w-full">
            {/* Hero Section */}
            <section className="relative w-full py-20 overflow-hidden">
                <div className="absolute inset-0 bg-[url('/hero-pattern.svg')] bg-repeat opacity-5"></div>
                <div className="container mx-auto px-4 flex flex-col items-center justify-center space-y-8 relative z-10">
                    <div className="text-center max-w-3xl mx-auto">
                        <h1 className="purple-gradient-text text-5xl font-extrabold tracking-tight sm:text-6xl mb-4">
                            Get In Touch
                        </h1>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Form Section */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                        <div className="space-y-8">
                            <h2 className="text-3xl font-bold">Contact Information</h2>
                            <p className="text-muted-foreground">
                                Fill out the form and our team will get back to you within 24 hours.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-primary">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold">Email</h3>
                                        <p className="text-muted-foreground">contact@myfirstwebsite.com</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-primary">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold">Phone</h3>
                                        <p className="text-muted-foreground">+1 (555) 123-4567</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-primary">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold">Location</h3>
                                        <p className="text-muted-foreground">123 Web Street, Digital City</p>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-6">
                                <h3 className="font-semibold mb-3">Follow Us</h3>
                                <div className="flex space-x-4">
                                    {['Twitter', 'LinkedIn', 'Instagram', 'GitHub'].map((social) => (
                                        <Button key={social} variant="ghost" size="sm" className="h-10 w-10 rounded-full p-0">
                                            <span className="sr-only">{social}</span>
                                            <div className="w-5 h-5 bg-primary/50 rounded-full"></div>
                                        </Button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <Card className="shadow-xl border-0 overflow-hidden glass-effect">
                            <CardHeader className="text-center">
                                <CardTitle className="text-2xl font-bold">Send Us a Message</CardTitle>
                                <CardDescription>
                                    We&apos;ll get back to you as soon as possible
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label htmlFor="first-name" className="text-sm font-medium">First Name</label>
                                        <Input id="first-name" placeholder="Enter your first name" className="rounded-md" />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="last-name" className="text-sm font-medium">Last Name</label>
                                        <Input id="last-name" placeholder="Enter your last name" className="rounded-md" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium">Email</label>
                                    <Input id="email" type="email" placeholder="Enter your email" className="rounded-md" />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="phone" className="text-sm font-medium">Phone (Optional)</label>
                                    <Input id="phone" placeholder="Enter your phone number" className="rounded-md" />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-medium">Message</label>
                                    <div className="rounded-md border bg-background min-h-[150px] p-3">
                                        <textarea id="message" placeholder="Type your message here" className="w-full h-full bg-transparent focus:outline-none resize-none" />
                                    </div>
                                </div>
                            </CardContent>
                            <CardFooter>
                                <Button variant="default" className="w-full rounded-md shadow-md hover:shadow-lg transition-all">
                                    Send Message
                                </Button>
                            </CardFooter>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="py-20 bg-muted/20">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4">Find Us</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Visit our office or send us mail at our location.
                        </p>
                    </div>

                    <ResponsiveMap
                        address="123 Web Street, Digital City"
                        className="max-w-5xl mx-auto"
                        height="400px"
                    />
                </div>
            </section>
        </div>
    );
} 