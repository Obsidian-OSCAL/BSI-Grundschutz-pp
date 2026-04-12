---
tags: oscal_control
class: BSI-Stand-der-Technik-Kernel
type: control
control: DET.5.10.4 Integritätsprüfung von Patches
parent_control: DET.5.10 Zeitnahes Patchmanagement
stmt_modal_verb: SOLLTE
stmt_action_word: testen
result_reference: Integrität
control_effort_level: '4'
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# DET.5.10.4 - Integritätsprüfung von Patches
Gruppe: [DET.5 Management von Schwachstellen](BSI/Grundschutz/Quellkataloge/Kernel/groups/DET.5%20Management%20von%20Schwachstellen.md)
---

** Übergeordnetes Control: ** [DET.5.10 Zeitnahes Patchmanagement](BSI/Grundschutz/Quellkataloge/Kernel/groups/controls/DET.5.10%20Zeitnahes%20Patchmanagement.md)
### Statement
|  Gruppe | Praktik | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - | - |
| <div style="background:#cccccc">*[Detektion (DET)](BSI/Grundschutz/Quellkataloge/Kernel/groups/DET%20Detektion.md)*<br> *  &rarr; [Management von Schwachstellen](BSI/Grundschutz/Quellkataloge/Kernel/groups/DET.5%20Management%20von%20Schwachstellen.md) *</div> | [Detektion](practices_Detektion_f479aa5a-6dd9-4b9b-973e-8c4f85b074ed) |  | [SOLLTE](modal_verbs_SOLLTE_a04a4855-3a63-4f06-b2f4-fc4d94aee2cf) | Patches vor der Installation auf Integrität |  | [testen](action_words_testen_db5f9334-97d0-4326-80f0-176348a3f165) | Detektions-Konzept | &mapsto;<span style="display:inline-block;border:1px solid;margin-left:8pt;padding:8pt;vertical-align:top;max-width:90%;">Detektion SOLLTE Patches vor der Installation auf Integrität testen.</span>
> > [!example]- im Ergebnis referenzierte Begriffe
> > | Begriff | Definition |> > | - | - |> > | [Integrität](result_Integrität_00000000-0000-0000-0000-000000000000) | Eigenschaft, dass Informationen nur genau dann geändert oder gelöscht werden, wenn die Institution dies beabsichtigt hat. |

> [!info]- Guidance
>Wenn Patches durch Fehler bei der Übertragung oder sogar bewusst von Angreifern verändert wurden, kann dies nach der Installation zu nicht behebbaren Fehlerzuständen oder zur Verbreitung von Schadcode führen.  Kann durch einen Abgleich von Prüfsummen umgesetzt werden, z.B. durch automatisierte Installationsroutinen oder einen manuellen Abgleich mit der Herstellerwebseite.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | 8eb6cebe-6ea5-4f78-a9b3-ce5a29f3bcc7 |> | ** Security Level** | [normal-SdT](security_level_normal-SdT) |> | ** Effort Level ** | [4](effort_level_4) |> | ** Alternate Identifier ** | 8eb6cebe-6ea5-4f78-a9b3-ce5a29f3bcc7 |

> [!info]- Links> > related: [TEST.3.1.2 Integritätstest](BSI/Grundschutz/Quellkataloge/Kernel/groups/controls/TEST.3.1.2%20Integritätstest.md)
