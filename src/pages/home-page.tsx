import { Divider } from '@/components/divider';
import { AboutMeBlock } from '@/components/home/about-me';
import { CasesBlock } from '@/components/home/cases';
import { EducationBlock } from '@/components/home/education';
import { ExperienceBlock } from '@/components/home/experience';
import { HeroSectionBlock } from '@/components/home/hero-section';

export function HomePage() {
    return (
        <main>
            <HeroSectionBlock />
            <Divider />
            <AboutMeBlock />
            <Divider />
            <CasesBlock />
            <Divider />
            <ExperienceBlock />
            <Divider />
            <EducationBlock />
            <Divider />
        </main>
    );
}
