

const AskQuestion = () => {
    return (
        <div>
            <section className="bg-base-200 rounded-lg">
                <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
                    <h2 className="text-2xl font-semibold sm:text-4xl">Frequently Asked Questions</h2>
                    <p className="mt-4 mb-8 opacity-90">Find quick solutions and insights into common inquiries about Book Aura's services and features in our comprehensive FAQ section.</p>
                    <div className="space-y-4">
                        <details className="w-full border rounded-lg" open="">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">How can I request a personalized book recommendation?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 opacity-90">Simply fill out our contact form, detailing your preferences, and let our algorithm do the rest to find your perfect read! </p>
                        </details>
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">Are there any fees associated with using Book Aura's recommendation services?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 opacity-90"> No, Book Aura provides its recommendation services completely free of charge to all users. </p>
                        </details>
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">Can I adjust my reading preferences after receiving recommendations?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 opacity-90">Yes, you can easily update your reading preferences at any time through your Book Aura account settings to receive tailored recommendations reflecting your evolving tastes. </p>
                        </details>



                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">Is my personal data secure when using Book Aura's recommendation services?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 opacity-90">Absolutely, Book Aura prioritizes the security and privacy of user data, employing robust encryption and strict data protection measures to safeguard all information provided. </p>
                        </details>


                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">How can I provide feedback or report issues with Book Aura's recommendation algorithms?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 opacity-90">Book Aura values user feedback greatly; you can easily submit feedback or report any issues with our recommendation algorithms through our contact form, and our team will promptly address them to enhance your experience. </p>
                        </details>


                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400"> Can I share my favorite book recommendations with friends on social media through Book Aura?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 opacity-90">Yes, Book Aura offers social sharing options, allowing you to spread the literary love by sharing your favorite reads with friends and followers effortlessly. </p>
                        </details>

                    </div>
                </div>
            </section>

        </div>
    );
};

export default AskQuestion;