FROM php:8.3-apache

RUN mkdir -p /var/www/html
RUN a2enmod rewrite && a2enmod ssl && a2enmod http2
RUN docker-php-ext-install mysqli && docker-php-ext-enable mysqli

COPY ./apache.conf /etc/apache2/sites-available/000-default.conf
