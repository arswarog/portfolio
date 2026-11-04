import { CaseCard } from './case-card';
import { CasesContainer } from './cases-container';

export function CasesBlock() {
    return (
        <CasesContainer>
            <CaseCard
                to="/cases/case-1"
                image="/images/cases/case-1.svg"
                title="Кейс 1"
                description="Краткое описание: какая задача, роль и результат. Заглушка."
            />
        </CasesContainer>
    );
}
