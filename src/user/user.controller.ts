import { Controller, Get, Query, Param } from '@nestjs/common';

@Controller('user')
export class UserController {
    // in-memory users
    private users = [
        { id: 1, name: 'omar' },
        { id: 2, name: 'mohamed' },
    ];

    @Get()
    getUsers(@Query('name') name?: string) {
        if (!name) return this.users;
        const q = name.toLowerCase();
        return this.users.filter(u => u.name.toLowerCase().includes(q));
    }

    @Get(':id')
    getUserById(@Param('id') id: string) {
        const userId = Number(id);
        return this.users.find(u => u.id === userId) || null;
    }
}
