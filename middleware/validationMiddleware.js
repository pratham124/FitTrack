import { body, param, validationResult } from 'express-validator';
import {
  BadRequestError,
  NotFoundError,
  UnauthorizedError,
} from '../error/customError.js';
import mongoose from 'mongoose';
import Exercise from '../models/ExerciseModel.js';
import User from '../models/UserModel.js';

const withValidationErrors = (validateValues) => {
  return [
    validateValues,
    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        const errorMessages = errors.array().map((error) => error.msg);

        const firstMessage = errorMessages[0];
        console.log(Object.getPrototypeOf(firstMessage));
        if (errorMessages[0].startsWith('no exercise')) {
          throw new NotFoundError(errorMessages);
        }
        if (errorMessages[0].startsWith('not authorized')) {
          throw new UnauthorizedError('not authorized to access this route');
        }
        throw new BadRequestError(errorMessages);
      }
      next();
    },
  ];
};

export const validateCreateExerciseInput = withValidationErrors([
  body('exerciseName').notEmpty().withMessage('exercise name is required').custom(async (exerciseName, { req }) => {
    const { id: userId } = req.user;
    const exercise = await Exercise.findOne({ exerciseName, createdBy: userId });
    if (exercise) {
      throw new BadRequestError('exercise already exists');
    }
  }).withMessage('exercise already exists'),
  body('set').notEmpty().withMessage('set is required').isInt().withMessage('set must be a number'),
  body('reps').notEmpty().withMessage('reps is required').isInt().withMessage('reps must be a number'),
  body('weight').notEmpty().withMessage('weight is required').isNumeric().withMessage('weight must be a number'),
]);

export const validateUpdateExerciseInput = withValidationErrors([
  body('set').notEmpty().withMessage('set is required').isInt().withMessage('set must be a number'),
  body('reps').notEmpty().withMessage('reps is required').isInt().withMessage('reps must be a number'),
  body('weight').notEmpty().withMessage('weight is required').isNumeric().withMessage('weight must be a number'),
]);

export const validateIdParam = withValidationErrors([
  param('id').custom(async (value, { req }) => {
    const isValidMongoId = mongoose.Types.ObjectId.isValid(value);
    if (!isValidMongoId) throw new BadRequestError('invalid MongoDB id');
    const exercise = await Exercise.findById(value);
    if (!exercise) throw new NotFoundError(`no exercise with id ${value}`);
    const isAdmin = req.user.role === 'admin';
    const isOwner = req.user.userId === exercise.createdBy.toString();

    if (!isAdmin && !isOwner)
      throw new UnauthorizedError('not authorized to access this route');
  }),
]);

export const validateRegisterInput = withValidationErrors([
  body('name').notEmpty().withMessage('name is required'),
  body('email')
    .notEmpty()
    .withMessage('email is required')
    .isEmail()
    .withMessage('invalid email format')
    .custom(async (email) => {
      const user = await User.findOne({ email });
      if (user) {
        throw new BadRequestError('email already exists');
      }
    }),
  body('password')
    .notEmpty()
    .withMessage('password is required')
    .isLength({ min: 8 })
    .withMessage('password must be at least 8 characters long'),
  body('height').notEmpty().withMessage('height is required').isNumeric().withMessage('height must be a number'),
  body('weight').notEmpty().withMessage('weight is required').isNumeric().withMessage('weight must be a number'),
]);

export const validateLoginInput = withValidationErrors([
  body('email')
    .notEmpty()
    .withMessage('email is required')
    .isEmail()
    .withMessage('invalid email format'),
  body('password').notEmpty().withMessage('password is required'),
]);

export const validateUpdateUserInput = withValidationErrors([
  body('name').notEmpty().withMessage('name is required'),
  body('height').notEmpty().withMessage('location is required'),
]);
