export const connect = ({ mapStateToProps = null, mapDispatchToProps = null, component, store }) => {
  if (!component) {
    throw new Error('`component` property is mandatory.');
  }

  if (!store) {
    throw new Error('`store` property is mandatory');
  }

  if (mapDispatchToProps) {
    Object.assign(component, mapDispatchToProps(store.dispatch.bind(store), component));
  }

  if (mapStateToProps) {
    Object.assign(component, mapStateToProps(store.getState(), component));

    const unsubscribe = store.subscribe(() => {
      Object.assign(component, mapStateToProps(store.getState(), component));
    });

    const componentOnDestroy = component.ngOnDestroy;
    component.ngOnDestroy = function() {
      unsubscribe();
      return componentOnDestroy.apply(component, arguments);
    };
  }
};
