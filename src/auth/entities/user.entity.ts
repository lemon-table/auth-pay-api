import { Column, Entity, JoinColumn, OneToMany, OneToOne, Relation } from 'typeorm';
import { BaseEntity } from '../../common/entity';
import { RefreshToken } from './refresh-token.entity';
import { AccessToken } from './access-token.entity';
//import { AccessLog } from './access-log.entity';
//import { Order, Point } from 'src/payment/entities';

export type UserRole = 'admin' | 'user';

@Entity()
export class User extends BaseEntity {
    @Column({ type: 'varchar' })
    name: string;

    @Column({ type: 'varchar' })
    email: string;

    @Column({ type: 'varchar' })
    password: string;

    @Column({ type: 'varchar', length: 50 })
    phone: string;

    @Column({ type: 'varchar', length: 50 })
    role: UserRole;

    @Column({ nullable: true })
    regNo: string;

    @Column({ default: false })
    isPersonalInfoVerified: boolean;

    // @OneToOne(() => Point, (point) => point.user)
    // @JoinColumn()
    // point: Relation<Point>;

    // @OneToMany(() => Order, (orders) => orders.user)
    // orders: Relation<Order[]>;

    @OneToMany(() => AccessToken, (token) => token.user)
    accessToken: Relation<AccessToken[]>;

    @OneToMany(() => RefreshToken, (token) => token.user)
    refreshToken: Relation<RefreshToken[]>;

    // @OneToMany(() => AccessLog, (log) => log.user)
    // accessLogs: Relation<AccessLog[]>;
}
