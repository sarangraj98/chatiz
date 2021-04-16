import {AuthenticationComponent} from '@loopback/authentication';
import {
  JWTAuthenticationComponent,



  UserServiceBindings
} from '@loopback/authentication-jwt';
import {ApplicationConfig, ChatizApplication} from './application';
import {DbDataSource} from './datasources';
import {UserRepository} from './repositories';
import {CustomUserService} from './services/user.service';

export * from './application';

export async function main(options: ApplicationConfig = {}) {
  const app = new ChatizApplication(options);
  app.component(AuthenticationComponent);
  app.component(JWTAuthenticationComponent);

  app.dataSource(DbDataSource, UserServiceBindings.DATASOURCE_NAME);
  // Bind user service
  app.bind(UserServiceBindings.USER_SERVICE).toClass(CustomUserService,);
  // Bind user and credentials repository
  app.bind(UserServiceBindings.USER_REPOSITORY).toClass(
    UserRepository,
  )

  await app.boot();
  await app.start();

  const url = app.restServer.url;
  console.log(`Server is running at ${url}`);
  console.log(`Try ${url}/ping`);

  return app;
}

if (require.main === module) {
  // Run the application
  const config = {
    rest: {
      port: +(process.env.PORT ?? 3000),
      host: process.env.HOST,
      // The `gracePeriodForClose` provides a graceful close for http/https
      // servers with keep-alive clients. The default value is `Infinity`
      // (don't force-close). If you want to immediately destroy all sockets
      // upon stop, set its value to `0`.
      // See https://www.npmjs.com/package/stoppable
      gracePeriodForClose: 5000, // 5 seconds
      openApiSpec: {
        // useful when used with OpenAPI-to-GraphQL to locate your application
        setServersFromRequest: true,
      },
    },
  };
  main(config).catch(err => {
    console.error('Cannot start the application.', err);
    process.exit(1);
  });
}
