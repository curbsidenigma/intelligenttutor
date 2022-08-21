const variablesData = {
    points: [
        {
            id: 1,
            name: 'O_2',
            img: './components/fixed-rotary-joint.svg',
            flag: false,
            x: 0,
            y: 0
        },
        {
            id: 2,
            name: 'A',
            img: null,
            flag: false,
            x: 0,
            y: 0
        },
        {
            id: 3,
            name: 'B',
            img: null,
            flag: false,
            x: 0,
            y: 0
        },
        {
            id: 4,
            name: 'O_4',
            img: './components/fixed-rotary-joint.svg',
            flag: false,
            x: 0,
            y: 0
        }
    ],
    r: [
        {
            id: 1, 
            name: 'Bancada', 
            mathJax: 'r_1',
            canvas: 'O_2O_4',
            magnitude: 0
        },
        {
            id: 2, 
            name: 'Entrada', 
            mathJax: 'r_2', 
            canvas: 'O_2A',
            magnitude: 0
        },
        {
            id: 3, 
            name: 'Acoplador',
            mathJax: 'r_3',
            canvas: 'AB',  
            magnitude: 0
        },
        {
            id: 4, 
            name: 'Salida',
            mathJax: 'r_4',
            canvas: 'O_4B',
            magnitude: 0
        }
    ],
    theta: [
        {
            id: 1, 
            name: 'Ángulo de bancada',
            mathJax: 'theta_1', 
            canvas: '',
            magnitude: 0
        },
        {
            id: 2, 
            name: 'Ángulo de entrada',
            mathJax: 'theta_2',
            canvas: 'O_4O_2A',
            magnitude: 0
        },
        {
            id: 3, 
            name: 'Ángulo de transmisión',
            mathJax: 'theta_3',
            canvas: '', 
            magnitude: 0
        },
        {
            id: 4, 
            name: 'Ángulo de salida',
            mathJax: 'theta_4',
            canvas: '', 
            magnitude: 0
        },
    ]
}

export default variablesData