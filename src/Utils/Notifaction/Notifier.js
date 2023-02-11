import { IconCheck, IconX } from '@tabler/icons';
import { showNotification } from '@mantine/notifications';


export function SuccessNotification (text){
    showNotification({
        color: 'teal',
        icon: <IconCheck/>,
        title: 'Успешно',
        message: text,
        styles: () => ({
                root:{ backgroundColor: '#373737'},
                title: {color: '#bbb'},
                description: {color: '#bbb'}
            })
        });
}

export function UnsuccessNotification (text){
    showNotification({
        color: 'red',
        icon: <IconX/>,
        title: 'Ошибка',
        message: text,
        styles: () => ({
                root:{ backgroundColor: '#373737'},
                title: {color: '#bbb'},
                description: {color: '#bbb'}
            })
        });
}