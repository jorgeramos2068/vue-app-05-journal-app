import daybookRouter from '@/modules/daybook/router';

describe('Daybook router', () => {
  it('should have the correct configuration', () => {
    expect(daybookRouter).toMatchObject({
      name: 'daybook',
      component: expect.any(Function),
      children: [
        {
          path: '',
          name: 'no-entry',
          component: expect.any(Function),
        },
        {
          path: ':id',
          name: 'entry',
          component: expect.any(Function),
          props: expect.any(Function),
        },
      ],
    });
  });

  it('should load the expected components', async () => {
    expect((await daybookRouter.children[0].component()).default.name).toBe(
      'NoEntrySelectedView'
    );
    expect((await daybookRouter.children[1].component()).default.name).toBe(
      'EntryView'
    );
  });

  it('should load the expected components with a more flexible approach', async () => {
    const promiseRoutes = [];
    daybookRouter.children.forEach(child =>
      promiseRoutes.push(child.component())
    );
    const routes = (await Promise.all(promiseRoutes)).map(
      route => route.default.name
    );
    expect(routes).toContain('NoEntrySelectedView');
    expect(routes).toContain('EntryView');
  });

  it('should return id of the route', () => {
    const route = {
      params: {
        id: 'test-id',
      },
    };
    expect(daybookRouter.children[1].props(route)).toEqual(route.params);
  });

  it('should return id of the route with a better approach', () => {
    const route = {
      params: {
        id: 'test-id',
      },
    };
    const entryRoute = daybookRouter.children.find(
      route => route.name === 'entry'
    );
    expect(entryRoute.props(route)).toEqual(route.params);
  });
});
