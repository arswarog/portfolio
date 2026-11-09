import type { ReactNode } from 'react';

interface CasesContainerProps {
    readonly children: ReactNode;
}

export function CasesContainer({ children }: CasesContainerProps) {
    return (
        <section>
            <div className="container">
                <div className="border-x border-border">
                    <div className="flex flex-col max-w-3xl mx-auto py-10 px-4 sm:px-7">
                        <p className="text-sm tracking-[2px] text-primary uppercase font-medium">
                            Кейсы
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border border-t border-border">
                        {children}
                    </div>
                </div>
            </div>
        </section>
    );
}
