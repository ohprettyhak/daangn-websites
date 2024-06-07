import { json } from '#lib/http';
import { type DeploymentParameters } from '#lib/objects/Deployment';

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const request = context.request as Request;
  const url = new URL(request.url);
  const params = await request.json<DeploymentParameters>();

  const id = context.env.DEPLOYMENT.newUniqueId();
  const bindUrl = new URL(`/deployment/${id.toString()}`, url);
  const checkUrl = new URL(`/deployment/${id.toString()}`, url);
  const callbackUrl = new URL(`/deployment/${id.toString()}/callback`, url);
  const artifactUrl = new URL(`/deployment/${id.toString()}/download-artifact`, url);
  const stub = context.env.DEPLOYMENT.get(id);

  try {
    const { state } = await stub.init(params, bindUrl.toString(), callbackUrl.toString());
    return json({
      state,
      id: id.toString(),
      bind_url: bindUrl.toString(),
      check_url: checkUrl.toString(),
      callback_url: callbackUrl.toString(),
      artifact_url: artifactUrl.toString(),
    });
  } catch (err) {
    console.error(err);

    // @ts-ignore
    return json({ message: err?.message || err.toString() }, { status: 500 });
  }
};
