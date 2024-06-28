// mbtiData.js
export const mbtiData = [
    {
        id: 1,
        title: '외향형(E) vs 내향형(I)',
        questions: [
            {
                id: 1,
                question: '당신은 사람들과 함께 있을 때 에너지를 얻나요, 아니면 혼자 있을 때 에너지를 얻나요?',
                options: [
                    { id: 1, label: '사람들과 함께 있을 때 에너지를 얻는다', type: 'E' },
                    { id: 2, label: '혼자 있을 때 에너지를 얻는다', type: 'I' },
                ],
            },
            {
                id: 2,
                question: '당신은 사회적 상황에서 편안함을 느끼나요, 아니면 긴장감을 느끼나요?',
                options: [
                    { id: 1, label: '사회적 상황에서 편안함을 느낀다', type: 'E' },
                    { id: 2, label: '사회적 상황에서 긴장감을 느낀다', type: 'I' },
                ],
            },
            {
                id: 3,
                question: '당신은 새로운 경험을 좋아하나요, 아니면 익숙한 것을 선호하나요?',
                options: [
                    { id: 1, label: '새로운 경험을 좋아한다', type: 'E' },
                    { id: 2, label: '익숙한 것을 선호한다', type: 'I' },
                ],
            },
        ],
    },
    {
        id: 2,
        title: '감각형(S) vs 직관형(N)',
        questions: [
            {
                id: 1,
                question:
                    '당신은 현실적이고 구체적인 것을 선호하나요, 아니면 추상적이고 상상력이 풍부한 것을 선호하나요?',
                options: [
                    { id: 1, label: '현실적이고 구체적인 것을 선호한다', type: 'S' },
                    { id: 2, label: '추상적이고 상상력이 풍부한 것을 선호한다', type: 'N' },
                ],
            },
            {
                id: 2,
                question: '당신은 사실과 데이터에 기반하여 판단하나요, 아니면 직관과 통찰에 기반하여 판단하나요?',
                options: [
                    { id: 1, label: '사실과 데이터에 기반하여 판단한다', type: 'S' },
                    { id: 2, label: '직관과 통찰에 기반하여 판단한다', type: 'N' },
                ],
            },
            {
                id: 3,
                question: '당신은 현재에 초점을 맞추나요, 아니면 미래에 초점을 맞추나요?',
                options: [
                    { id: 1, label: '현재에 초점을 맞춘다', type: 'S' },
                    { id: 2, label: '미래에 초점을 맞춘다', type: 'N' },
                ],
            },
        ],
    },
    {
        id: 3,
        title: '사고형(T) vs 감정형(F)',
        questions: [
            {
                id: 1,
                question:
                    '당신은 의사결정을 할 때 객관적인 논리와 분석에 중점을 두나요, 아니면 개인적인 가치관과 타인의 감정에 중점을 두나요?',
                options: [
                    { id: 1, label: '객관적인 논리와 분석에 중점을 둔다', type: 'T' },
                    { id: 2, label: '개인적인 가치관과 타인의 감정에 중점을 둔다', type: 'F' },
                ],
            },
            {
                id: 2,
                question: '당신은 문제 해결 시 공정성과 정의에 중점을 두나요, 아니면 화합과 조화에 중점을 두나요?',
                options: [
                    { id: 1, label: '공정성과 정의에 중점을 둔다', type: 'T' },
                    { id: 2, label: '화합과 조화에 중점을 둔다', type: 'F' },
                ],
            },
            {
                id: 3,
                question: '당신은 타인의 감정을 고려하여 결정을 내리나요, 아니면 객관적인 기준에 따라 결정을 내리나요?',
                options: [
                    { id: 1, label: '타인의 감정을 고려하여 결정을 내린다', type: 'F' },
                    { id: 2, label: '객관적인 기준에 따라 결정을 내린다', type: 'T' },
                ],
            },
        ],
    },
    {
        id: 4,
        title: '판단형(J) vs 인식형(P)',
        questions: [
            {
                id: 1,
                question: '당신은 계획을 세우고 일정을 잘 지키나요, 아니면 융통성 있게 상황에 맞춰 행동하나요?',
                options: [
                    { id: 1, label: '계획을 세우고 일정을 잘 지킨다', type: 'J' },
                    { id: 2, label: '융통성 있게 상황에 맞춰 행동한다', type: 'P' },
                ],
            },
            {
                id: 2,
                question:
                    '당신은 결정을 내리는 것을 좋아하나요, 아니면 상황을 관찰하고 정보를 더 수집하는 것을 좋아하나요?',
                options: [
                    { id: 1, label: '결정을 내리는 것을 좋아한다', type: 'J' },
                    { id: 2, label: '상황을 관찰하고 정보를 더 수집하는 것을 좋아한다', type: 'P' },
                ],
            },
            {
                id: 3,
                question: '당신은 일을 완료하기 위해 노력하나요, 아니면 새로운 가능성을 탐색하는 것에 관심이 있나요?',
                options: [
                    { id: 1, label: '일을 완료하기 위해 노력한다', type: 'J' },
                    { id: 2, label: '새로운 가능성을 탐색하는 것에 관심이 있다', type: 'P' },
                ],
            },
        ],
    },
];
