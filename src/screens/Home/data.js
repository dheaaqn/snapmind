import { isEmpty } from "lodash";
import { colors } from "../../assets/styles/colors";

export const agendaItems = [
    {
        title: "2024-12-08",
        data: [
            {
                title: 'First Yoga',
                description: 'Lorem Ipsum is simply dummy text.',
                priority: 'high'
            },
            {
                title: 'Long Yoga',
                description: 'Lorem Ipsum is simply dummy text.',
                priority: 'medium'
            },
            {
                title: 'Long Yoga',
                description: 'Lorem Ipsum is simply dummy text.',
                priority: 'low'
            }
        ],
    },{
        title: "2024-12-09",
        data: [
            {
                title: 'First Yoga',
                description: 'Lorem Ipsum is simply dummy text.',
                priority: 'high'
            },
            {
                title: 'Long Yoga',
                description: 'Lorem Ipsum is simply dummy text.',
                priority: 'medium'
            },
            {
                title: 'Long Yoga',
                description: 'Lorem Ipsum is simply dummy text.',
                priority: 'low'
            }
        ],
    },
    {
        title: "2024-12-10",
        data: [
            {
                title: 'First Yoga',
                description: 'Lorem Ipsum is simply dummy text.',
                priority: 'high'
            },
            {
                title: 'Long Yoga',
                description: 'Lorem Ipsum is simply dummy text.',
                priority: 'medium'
            },
            {
                title: 'Long Yoga',
                description: 'Lorem Ipsum is simply dummy text.',
                priority: 'low'
            }
        ],
    },
    {
        title: "2024-12-11",
        data: [{}],
    },
    {
        title: "2024-12-12",
        data: [{}],
    },
    {
        title: "2024-12-13",
        data: [{}],
    },
    {
        title: "2024-12-14",
        data: [{}],
    },
]

export const getMarkedDates = () => {
    const marked = {};

    agendaItems.forEach(item => {
        const dots = item.data.map((dataItem) => {
            let color;
            switch (dataItem.priority) {
                case 'high':
                    color = colors.orange;
                    break;
                case 'medium':
                    color = colors.blue;
                    break;
                case 'low':
                    color = colors.green;
                    break;
                default:
                    color = colors.green;
            }
            
            return {
                color: color
            };
        });

        if (item.data && item.data.length > 0 && !isEmpty(item.data[0])) {
            marked[item.title] = { dots: dots };
        }

    });
    return marked;
}

export const getTaskSummary = () => {
    const summary = {
        high: 0,
        medium: 0,
        low: 0
    }

    const today = new Date().toISOString().split('T')[0];;
    const agendas = agendaItems.find((x) => x.title === today);

    if (agendas && agendas.data) {
        agendas.data.forEach((task) => {
            if (task.priority) {
                summary[task.priority]++;
            }
        });
    }

    return summary;
}