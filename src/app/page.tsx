import FaqSection from '@/components/home/faq/FaqSection'
import Header from '@/components/home/Header'

export default function Home() {
    return (
        <>
            <Header />
            <main>
                <div className="h-[2000px]"></div>
                <FaqSection />
            </main>
        </>
    )
}
