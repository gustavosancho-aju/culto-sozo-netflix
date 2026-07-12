CREATE TABLE `testimonial_likes` (
	`id` int AUTO_INCREMENT NOT NULL,
	`testimonialId` int NOT NULL,
	`visitorHash` varchar(64) NOT NULL,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `testimonial_likes_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `testimonials` (
	`id` int AUTO_INCREMENT NOT NULL,
	`content` text NOT NULL,
	`authorName` varchar(128),
	`authorCity` varchar(128),
	`linkedEpisodeId` varchar(64),
	`linkedEpisodeTitle` text,
	`status` enum('pending','approved','rejected') NOT NULL DEFAULT 'pending',
	`adminNote` text,
	`likesCount` int NOT NULL DEFAULT 0,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	`approvedAt` timestamp,
	CONSTRAINT `testimonials_id` PRIMARY KEY(`id`)
);
