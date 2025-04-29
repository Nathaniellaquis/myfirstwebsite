import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AboutPage() {
    return (
        <div className="w-full">
            {/* Hero Section */}
            <section className="relative w-full py-20 overflow-hidden">
                <div className="absolute inset-0 bg-[url('/hero-pattern.svg')] bg-repeat opacity-5"></div>
                <div className="container mx-auto px-4 flex flex-col items-center justify-center space-y-8 relative z-10">
                    <div className="text-center max-w-3xl mx-auto">
                        <h1 className="purple-gradient-text text-5xl font-extrabold tracking-tight sm:text-6xl mb-4">
                            About Us
                        </h1>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Learn more about our team, mission, and the technology behind our beautiful website.
                        </p>
                    </div>
                </div>
            </section>

            {/* Our Story Section */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold">Our Story</h2>
                            <p className="text-muted-foreground">
                                We started with a simple idea: to create beautiful, modern websites that are both functional and
                                aesthetically pleasing. Our journey began with a deep appreciation for design and technology.
                            </p>
                            <p className="text-muted-foreground">
                                Today, we continue to push the boundaries of web development, creating experiences that delight
                                users and help businesses succeed online.
                            </p>
                            <Button className="rounded-full mt-4">Learn More</Button>
                        </div>
                        <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 mix-blend-overlay z-10"></div>
                            <div className="absolute inset-0 bg-[url('/hero-pattern.svg')] bg-repeat opacity-10"></div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="text-4xl font-bold purple-gradient-text">Our Vision</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-20 bg-muted/50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4">Our Team</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Meet the talented individuals who make our success possible.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[1, 2, 3].map((i) => (
                            <Card key={i} className="card-hover overflow-hidden border-0 shadow-lg">
                                <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 relative">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center">
                                            <span className="text-3xl font-bold text-primary">
                                                {["JD", "AR", "MK"][i - 1]}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <CardHeader>
                                    <CardTitle className="text-center">
                                        {["Jane Doe", "Alex Rodriguez", "Maria Kim"][i - 1]}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-center text-muted-foreground">
                                        {["Creative Director", "Lead Developer", "UX Designer"][i - 1]}
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Technologies Section */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4">Our Technologies</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            We use cutting-edge technologies to build modern websites.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                        {["Next.js", "React", "Tailwind CSS", "Shadcn UI"].map((tech) => (
                            <Card key={tech} className="card-hover text-center py-8 border-0 shadow-md">
                                <CardContent>
                                    <h3 className="text-xl font-bold mb-2">{tech}</h3>
                                    <p className="text-sm text-muted-foreground">
                                        Modern web technology
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
} 