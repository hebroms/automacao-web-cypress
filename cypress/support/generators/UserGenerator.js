import { faker } from '@faker-js/faker';
import User from '../model/User';

class FakeEmailGenerator {
  static generate() {
    return faker.internet.email().toLowerCase();
  }
}

class FakePasswordGenerator {
  static generate() {
    return faker.internet.password(10, true, /[A-Za-z0-9]/, '!@');
  }
}

class FakeNameGenerator {
  static generate() {
    return faker.person.fullName();
  }
}

class FakeUserGenerator {
  static generate() {
    return new User(
      FakeNameGenerator.generate(),
      FakeEmailGenerator.generate(),
      FakePasswordGenerator.generate()
    );
  }
}

export { FakeEmailGenerator, FakePasswordGenerator, FakeNameGenerator, FakeUserGenerator };
