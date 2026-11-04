import { CaseCard } from './case-card';
import { CasesContainer } from './cases-container';

export function CasesBlock() {
    return (
        <CasesContainer>
            <CaseCard
                to="/cases/billing"
                image="/images/cases/billing.svg"
                title="Биллинг SaaS"
                description="От краткого запроса до архитектуры биллинга SaaS"
            />
        </CasesContainer>
    );
}
