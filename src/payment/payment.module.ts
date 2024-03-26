import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
    CouponRepository,
    IssuedCouponRepository,
    OrderItemRepository,
    OrderRepository,
    PointLogRepository,
    PointRepository,
    ProductRepository,
    ShippingInfoRepository,
} from './repositories';
import {
    Coupon,
    IssuedCoupon,
    Order,
    OrderItem,
    Point,
    PointLog,
    Product,
    ShippingInfo,
} from './entities';
import { AuthModule } from '../auth/auth.module';
import { PaymentService, ProductService } from './services';
import { User } from '../auth/entities';

@Module({
    imports: [
        AuthModule,
        TypeOrmModule.forFeature([
            Order,
            OrderItem,
            ShippingInfo,
            Point,
            PointLog,
            Coupon,
            IssuedCoupon,
            Product,
            User,
        ]),
    ],
    providers: [
        PaymentService,
        ProductService,

        OrderRepository,
        OrderItemRepository,
        ShippingInfoRepository,
        ProductRepository,
        CouponRepository,
        IssuedCouponRepository,
        PointRepository,
        PointLogRepository,
    ],
})
export class PaymentModule {}
