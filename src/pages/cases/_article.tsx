import type { ReactNode } from 'react';

interface CaseSectionProps {
    readonly title: string;
    readonly children: ReactNode;
}

export function CaseSection({ title, children }: CaseSectionProps) {
    return (
        <section className="flex flex-col gap-4">
            <h2 className="text-2xl font-medium md:text-[28px]">{title}</h2>
            {children}
        </section>
    );
}

interface CaseSubsectionProps {
    readonly title: string;
    readonly children: ReactNode;
}

export function CaseSubsection({ title, children }: CaseSubsectionProps) {
    return (
        <div className="flex flex-col gap-2">
            <h3 className="text-lg font-medium sm:text-xl">{title}</h3>
            {children}
        </div>
    );
}

interface CaseListProps {
    readonly items: readonly ReactNode[];
}

export function CaseList({ items }: CaseListProps) {
    return (
        <ul className="flex list-disc flex-col gap-2.5 pl-5 marker:text-primary">
            {items.map((item, index) => (
                <li
                    key={index}
                    className="text-base text-muted-foreground"
                >
                    {item}
                </li>
            ))}
        </ul>
    );
}

interface CaseStrongProps {
    readonly children: ReactNode;
}

export function CaseStrong({ children }: CaseStrongProps) {
    return <strong className="font-medium text-primary">{children}</strong>;
}
