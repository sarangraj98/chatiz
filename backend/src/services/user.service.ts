import {UserService} from '@loopback/authentication';
import {repository} from '@loopback/repository';
import {HttpErrors} from '@loopback/rest';
import {securityId, UserProfile} from '@loopback/security';
import {compare} from 'bcryptjs';
// User --> MyUser
import {User} from '../models';
// UserRepository --> MyUserRepository
import {UserRepository} from '../repositories';

export declare type Credentials = {
  email: string;
  password: string;
};

// User --> MyUser
export class CustomUserService implements UserService<User, Credentials> {
  constructor(
    @repository(UserRepository) public userRepository: UserRepository,
  ) { }

  async verifyCredentials(credentials: Credentials): Promise<User> {
    const foundUser = await this.userRepository.findOne({
      where: {email: credentials.email},
    });
    if (!foundUser) {
      throw new HttpErrors.Unauthorized("Email not found");
    }

    const passwordMatched = await compare(
      credentials.password,
      foundUser.password,
    );

    if (!passwordMatched) {
      throw new HttpErrors.Unauthorized("Password error");
    }

    return foundUser;
  }

  // User --> MyUser
  convertToUserProfile(user: User): UserProfile {
    return {
      [securityId]: user.id.toString(),
      username: user.username,
      id: user.id,
      name: user.name,
      email: user.email
    };
  }
}
