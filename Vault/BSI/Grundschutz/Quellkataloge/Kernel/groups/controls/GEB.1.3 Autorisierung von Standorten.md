---
tags: oscal_control
class: BSI-Stand-der-Technik-Kernel
type: control
control: GEB.1.3 Autorisierung von Standorten
stmt_target_object_category: Standorte
stmt_modal_verb: SOLLTE
stmt_action_word: autorisieren
stmt_documentation: Prozess Gebäudemanagement
result_reference: Asset
control_effort_level: '2'
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# GEB.1.3 - Autorisierung von Standorten
Gruppe: [GEB.1 Grundlagen](BSI/Grundschutz/Quellkataloge/Kernel/groups/GEB.1%20Grundlagen.md)
---

> [!example]- Untergeordnete Controls
> [GEB.1.3.1 Abnahme von Standorten](BSI/Grundschutz/Quellkataloge/Kernel/groups/controls/GEB.1.3.1%20Abnahme%20von%20Standorten.md)### Statement
|  Gruppe | Praktik | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - | - |
| <div style="background:#cccccc">*[Gebäudemanagement (GEB)](BSI/Grundschutz/Quellkataloge/Kernel/groups/GEB%20Gebäudemanagement.md)*<br> *  &rarr; [Grundlagen](BSI/Grundschutz/Quellkataloge/Kernel/groups/GEB.1%20Grundlagen.md) *</div> | [Gebäudemanagement](practices_Gebäudemanagement_17b37cff-5445-4487-acec-ef18d91cfec2) | [Standorte](target_object_categories_Standorte_df3978e8-775d-4aa6-8be7-fd2a6f12315d) | [SOLLTE](modal_verbs_SOLLTE_a04a4855-3a63-4f06-b2f4-fc4d94aee2cf) | Standorte für die Stationierung von Assets |  | [autorisieren](action_words_autorisieren_7e32a8ee-3b6b-45c2-a788-d4223d7920ad) | [Prozess Gebäudemanagement](documentation_guidelines_Prozess Gebäudemanagement) | &mapsto;<span style="display:inline-block;border:1px solid;margin-left:8pt;padding:8pt;vertical-align:top;max-width:90%;">Gebäudemanagement für Standorte SOLLTE Standorte für die Stationierung von Assets autorisieren.</span>
> > [!example]- im Ergebnis referenzierte Begriffe
> > | Begriff | Definition |> > | - | - |> > | [Asset](result_Asset_00000000-0000-0000-0000-000000000000) | Assets sind alle Werte einer Institution, die schützenswert sind und über einen Besitzer verfügen. Dies umfasst sowohl materielle als auch immaterielle Werte wie Hardware, Software, Daten, geistiges Eigentum, Dokumentationen und Know-how der Mitarbeiter. Assets können sowohl Informationstragende (z. B. Datenträger, Endgeräte, Netzwerkkomponenten, Papierakten, Lizenzen, Domains, Accounts) als auch nicht-informationstragende Betriebsmittel (z.B. Gebäude) sein. |

> [!info]- Guidance
>Die gezielte Autorisierung von Standorten für die Stationierung von Assets kann dazu beitragen, dass Informationen und Systeme nur an physischen Orten verarbeitet oder aufbewahrt werden, die zuvor auf ihre Sicherheitsanforderungen hin geprüft wurden. So kann beispielsweise verhindert werden, dass sensible Server in unkontrollierten Räumen ohne Zutrittskontrolle oder redundante Stromversorgung betrieben werden – ein Fehlen dieser Maßnahmen könnte im Ernstfall zu Datenverlust bei einem Kurzschluss oder unbefugtem Zugriff durch Dritte führen. Ebenso kann die Prüfung und Freigabe durch eine zuständige Rolle dafür sorgen, dass neue Außenstellen erst dann in den Betrieb gehen, wenn etwa Brandmelde‑, Videoüberwachungs‑ oder Netzwerksicherheitsanforderungen erfüllt sind; andernfalls könnte eine unerkannte technische Schwachstelle in einem Zweigstellenrechner dazu führen, dass Schadcode sich ins gesamte Unternehmensnetz ausbreitet. Auch bei der Nutzung von Cloud‑ oder Colocation‑Rechenzentren kann eine formale Freigabe sicherstellen, dass vorab vertraglich vereinbarte Sicherheits- und Compliance‑Anforderungen – wie beispielsweise ISO‑27001‑Zertifizierung oder Verschlüsselung im Ruhezustand – tatsächlich gegeben sind, andernfalls könnte es zu Datenschutzverletzungen oder Regulierungsstrafen kommen.  Zur praktischen Umsetzung kann ein Standort‑Freigabeprozess definiert werden, der folgende Elemente enthält: eine Checkliste für physische Sicherheitskriterien (Zutrittskontrolle, Umwelt‑ und Brandschutz), eine technische Abnahmematrix (Netzwerksegmentierung, Monitoring, Backup‑Anbindung) sowie die Benennung einer verantwortlichen Person oder Rolle, die das Go‑No‑Go‑Entscheidungsrecht hält. Bei Änderungen am Standort oder an den Assets kann diese Rolle regelmäßige Reviews anstoßen, wodurch nachträgliche Kontrollen möglich werden. Automatisierte Workflow‑Tools können dabei unterstützen, Prüf‑ und Genehmigungsschritte nachvollziehbar zu dokumentieren und Eskalationspfade abzubilden.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | b25c2cfd-431c-4996-9041-47ae0e516432 |> | ** Security Level** | [normal-SdT](security_level_normal-SdT) |> | ** Effort Level ** | [2](effort_level_2) |> | ** Alternate Identifier ** | b25c2cfd-431c-4996-9041-47ae0e516432 |

> [!info]- Links> > related: [ASST.3.10 Autorisierung von Datenlokationen](BSI/Grundschutz/Quellkataloge/Kernel/groups/controls/ASST.3.10%20Autorisierung%20von%20Datenlokationen.md)
