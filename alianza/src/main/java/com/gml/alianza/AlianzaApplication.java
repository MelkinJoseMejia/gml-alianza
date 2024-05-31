package com.gml.alianza;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@EnableJpaRepositories(basePackages = "com.gml.alianza.*")
@EntityScan(basePackages = "com.gml.alianza.*")
@ComponentScan(basePackages = "com.gml.alianza.*")
@SpringBootApplication
public class AlianzaApplication {

	public static void main(String[] args) {
		SpringApplication.run(AlianzaApplication.class, args);
	}

}
