import * as React from 'react';
export interface MenuConfig {
    title: string,
    path: string,
    icon: React.ElementType
    menuOptions: MenuOptions[]
}
export interface MenuOptions {
    title: string,
    path: string
}