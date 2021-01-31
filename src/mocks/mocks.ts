import { DashboardDetails }         from '@/interfaces/DashboardDetails';
import { DashboardTypes }           from '@/interfaces/DashboardTypes';
import { DashboardsDescription }    from '@/interfaces/DashboardsDescription';
import { DashboardsFiles }          from '@/interfaces/DashboardsFiles';

export const dashboardTypesMock: DashboardTypes[] = [
    {
        id: 1,
        value: 'Team Management Dashboard'
    },
    {
        id: 2,
        value: 'Client Dashboard'
    },
    {
        id: 3,
        value: 'User Dashboard'
    }
]

export const dashboardsFilesMock: DashboardsFiles[] = [
    {
        id: 1,
        results: [
            {
                type: 'pdf',
                href: '/'
            },
            {
                type: 'img',
                href: 'img1.png'
            },
            {
                type: 'img',
                href: 'img2.png'
            },
            {
                type: 'docx',
                href: '/'
            },
            {
                type: 'csv',
                href: '/'
            },
            {
                type: 'pdf',
                href: '/'
            },
            {
                type: 'img',
                href: 'img3.png'
            }
        ]
    },
    {
        id: 2,
        results: [
            {
                type: 'pdf',
                href: '/'
            },
            {
                type: 'docx',
                href: '/'
            },
            {
                type: 'csv',
                href: '/'
            },
            {
                type: 'csv',
                href: '/'
            },
            {
                type: 'csv',
                href: '/'
            },
        ]
    },
    {
        id: 3,
        results: [
            {
                type: 'pdf',
                href: '/'
            },
            {
                type: 'docx',
                href: '/'
            },
            {
                type: 'csv',
                href: '/'
            },
            {
                type: 'csv',
                href: '/'
            },
            {
                type: 'csv',
                href: '/'
            },
        ]
    }
]

export const dashboardDetailsMock: DashboardDetails[] =  [
    {
        id: 1,
        items: [
            {
                type: 1,
                label: 'Employees',
                value: '21'
            },
            {
                type: 2,
                label: 'REQUESTS',
                value: '37'
            },
            {
                type: 3,
                label: 'ACTIVITY SCORE',
                value: '8.5 / 10'
            },
            {
                type: 4,
                label: 'SOLVED',
                value: '331'
            }
        ]
    },
    {
        id: 2,
        items: [
            {
                type: 1,
                label: 'Employees',
                value: '10'
            },
            {
                type: 2,
                label: 'REQUESTS',
                value: '44'
            },
            {
                type: 3,
                label: 'ACTIVITY SCORE',
                value: '8.0 / 10'
            },
            {
                type: 4,
                label: 'SOLVED',
                value: '35'
            }
        ]
    }
]

export const dashboardDescriptionMock: DashboardsDescription[] =  [
    {
        id: 1,
        results: [
            {
                id: 1,
                header: [ 'Description','Status','Due date','Responsible party','Send message' ],
                title: 'Requests',
                content: [
                    {
                        items: [
                            {
                                value: 'Lorem ipsum dolor'
                            },
                            {
                                value: 'Solved',
                                status: 'success'
                            },
                            {
                                value: '12/24/2019'
                            },
                            {
                                img: 'person.png',
                                value: 'Lucille Richards'
                            },
                            {
                                value: 'Yes'
                            }
                        ]
                    },
                    {
                        items: [
                            {
                                value: 'Lorem ipsum dolor'
                            },
                            {
                                value: 'In Progress',
                                status: 'warning'
                            },
                            {
                                value: '12/24/2019'
                            },
                            {
                                img: 'person.png',
                                value: 'Lucille Richards'
                            },
                            {
                                value: 'Yes'
                            }
                        ]
                    },
                    {
                        items: [
                            {
                                value: 'Lorem ipsum dolor'
                            },
                            {
                                value: 'Accepted',
                                status: 'success'
                            },
                            {
                                value: '12/24/2019'
                            },
                            {
                                img: 'person.png',
                                value: 'Lucille Richards'
                            },
                            {
                                value: 'Yes'
                            }
                        ]
                    }
                ]
            },
            {
                id: 2,
                header: [ 'Description','Due date', 'Responsible party' ],
                title: 'Activity Score',
                content: [
                    {
                        items: [
                            {
                                value: 'Lorem ipsum dolor'
                            },
                            {
                                value: '12/24/2019'
                            },
                            {
                                img: 'person.png',
                                value: 'Lucille Richards'
                            }
                        ]
                    },
                    {
                        items: [
                            {
                                value: 'Lorem ipsum dolor'
                            },
                            {
                                value: '12/24/2019'
                            },
                            {
                                img: 'person.png',
                                value: 'Lucille Richards'
                            }
                        ]
                    },
                    {
                        items: [
                            {
                                value: 'Lorem ipsum dolor'
                            },
                            {
                                value: '12/24/2019'
                            },

                            {
                                img: 'person.png',
                                value: 'Lucille Richards'
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        id: 2,
        results: [
            {
                id: 1,
                header: [ 'Description','Status','Due date','Responsible party','Send message' ],
                title: 'Requests',
                content: [
                    {
                        items: [
                            {
                                value: 'Lorem ipsum dolor'
                            },
                            {
                                value: 'Solved',
                                status: 'success'
                            },
                            {
                                value: '12/24/2019'
                            },
                            {
                                img: 'person.png',
                                value: 'Lucille Richards'
                            },
                            {
                                value: 'Yes'
                            }
                        ]
                    },
                    {
                        items: [
                            {
                                value: 'Lorem ipsum dolor'
                            },
                            {
                                value: 'In Progress',
                                status: 'warning'
                            },
                            {
                                value: '12/24/2019'
                            },
                            {
                                img: 'person.png',
                                value: 'Lucille Richards'
                            },
                            {
                                value: 'Yes'
                            }
                        ]
                    },
                    {
                        items: [
                            {
                                value: 'Lorem ipsum dolor'
                            },
                            {
                                value: 'Accepted',
                                status: 'success'
                            },
                            {
                                value: '12/24/2019'
                            },
                            {
                                img: 'person.png',
                                value: 'Lucille Richards'
                            },
                            {
                                value: 'Yes'
                            }
                        ]
                    }
                ]
            },
            {
                id: 2,
                header: [ 'Description','Due date', 'Responsible party' ],
                title: 'Activity Score',
                content: [
                    {
                        items: [
                            {
                                value: 'Lorem ipsum dolor'
                            },
                            {
                                value: '12/24/2019'
                            },
                            {
                                img: 'person.png',
                                value: 'Lucille Richards'
                            }
                        ]
                    },
                    {
                        items: [
                            {
                                value: 'Lorem ipsum dolor'
                            },
                            {
                                value: '12/24/2019'
                            },
                            {
                                img: 'person.png',
                                value: 'Lucille Richards'
                            }
                        ]
                    },
                    {
                        items: [
                            {
                                value: 'Lorem ipsum dolor'
                            },
                            {
                                value: '12/24/2019'
                            },

                            {
                                img: 'person.png',
                                value: 'Lucille Richards'
                            }
                        ]
                    }
                ]
            },
            {
                id: 3,
                header: [ 'Description','Status','Due date','Responsible party','Send message' ],
                title: 'Solved',
                content: [
                    {
                        items: [
                            {
                                value: 'Lorem ipsum dolor'
                            },
                            {
                                value: 'Solved',
                                status: 'success'
                            },
                            {
                                value: '12/24/2019'
                            },
                            {
                                img: 'person.png',
                                value: 'Lucille Richards'
                            },
                            {
                                value: 'Yes'
                            }
                        ]
                    },
                    {
                        items: [
                            {
                                value: 'Lorem ipsum dolor'
                            },
                            {
                                value: 'In Progress',
                                status: 'warning'
                            },
                            {
                                value: '12/24/2019'
                            },
                            {
                                img: 'person.png',
                                value: 'Lucille Richards'
                            },
                            {
                                value: 'Yes'
                            }
                        ]
                    },
                    {
                        items: [
                            {
                                value: 'Lorem ipsum dolor'
                            },
                            {
                                value: 'Accepted',
                                status: 'success'
                            },
                            {
                                value: '12/24/2019'
                            },
                            {
                                img: 'person.png',
                                value: 'Lucille Richards'
                            },
                            {
                                value: 'Yes'
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        id:3,
        results: [
            {
                id: 1,
                header: [ 'Description','Status','Due date','Responsible party','Send message' ],
                title: 'Requests',
                content: [
                    {
                        items: [
                            {
                                value: 'Lorem ipsum dolor'
                            },
                            {
                                value: 'Solved',
                                status: 'success'
                            },
                            {
                                value: '12/24/2019'
                            },
                            {
                                img: 'person.png',
                                value: 'Lucille Richards'
                            },
                            {
                                value: 'Yes'
                            }
                        ]
                    },
                    {
                        items: [
                            {
                                value: 'Lorem ipsum dolor'
                            },
                            {
                                value: 'In Progress',
                                status: 'warning'
                            },
                            {
                                value: '12/24/2019'
                            },
                            {
                                img: 'person.png',
                                value: 'Lucille Richards'
                            },
                            {
                                value: 'Yes'
                            }
                        ]
                    },
                    {
                        items: [
                            {
                                value: 'Lorem ipsum dolor'
                            },
                            {
                                value: 'Accepted',
                                status: 'success'
                            },
                            {
                                value: '12/24/2019'
                            },
                            {
                                img: 'person.png',
                                value: 'Lucille Richards'
                            },
                            {
                                value: 'Yes'
                            }
                        ]
                    }
                ]
            }
        ]
    }
]
