---
tags: oscal_control
class: BSI-Stand-der-Technik-Kernel
type: control
control: GEB.3.3 Authentifizierung vor Zutritt
stmt_target_object_category: Standorte
stmt_modal_verb: SOLLTE
stmt_action_word: authentifizieren
stmt_documentation: Prozess Gebäudemanagement
result_reference: Zutritt
control_effort_level: '3'
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# GEB.3.3 - Authentifizierung vor Zutritt
Gruppe: [GEB.3 Physischer Zutritt](BSI/Grundschutz/Quellkataloge/Kernel/groups/GEB.3%20Physischer%20Zutritt.md)
---

> [!example]- Untergeordnete Controls
> [GEB.3.3.1 Zugangskontrollanlage](BSI/Grundschutz/Quellkataloge/Kernel/groups/controls/GEB.3.3.1%20Zugangskontrollanlage.md)> [GEB.3.3.2 Dokumentation von Zutritten](BSI/Grundschutz/Quellkataloge/Kernel/groups/controls/GEB.3.3.2%20Dokumentation%20von%20Zutritten.md)> [GEB.3.3.3 Besucheranmeldung](BSI/Grundschutz/Quellkataloge/Kernel/groups/controls/GEB.3.3.3%20Besucheranmeldung.md)### Statement
|  Gruppe | Praktik | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - | - |
| <div style="background:#cccccc">*[Gebäudemanagement (GEB)](BSI/Grundschutz/Quellkataloge/Kernel/groups/GEB%20Gebäudemanagement.md)*<br> *  &rarr; [Physischer Zutritt](BSI/Grundschutz/Quellkataloge/Kernel/groups/GEB.3%20Physischer%20Zutritt.md) *</div> | [Gebäudemanagement](practices_Gebäudemanagement_17b37cff-5445-4487-acec-ef18d91cfec2) | [Standorte](target_object_categories_Standorte_df3978e8-775d-4aa6-8be7-fd2a6f12315d) | [SOLLTE](modal_verbs_SOLLTE_a04a4855-3a63-4f06-b2f4-fc4d94aee2cf) | Zutritte | im Einklang mit den Festlegungen des Identitäts- und Berechtigungsmanagements | [authentifizieren](action_words_authentifizieren_8e423108-c6dd-41fd-8104-e9221bd9d085) | [Prozess Gebäudemanagement](documentation_guidelines_Prozess_Gebäudemanagement) | &mapsto;<span style="display:inline-block;border:1px solid;margin-left:8pt;padding:8pt;vertical-align:top;max-width:90%;">Gebäudemanagement für Standorte SOLLTE Zutritte im Einklang mit den Festlegungen des Identitäts- und Berechtigungsmanagements authentifizieren.</span>
> > [!example]- im Ergebnis referenzierte Begriffe
> > | Begriff | Definition |> > | - | - |> > | [Zutritt](result_Zutritt_00000000-0000-0000-0000-000000000000) | Mit Zutritt wird das Betreten von abgegrenzten Bereichen wie z. B. Räumen oder geschützten Arealen in einem Gelände bezeichnet. Zutrittsberechtigungen erlauben somit Personen, bestimmte Umgebungen zu betreten, also beispielsweise ein Gelände, ein Gebäude oder definierte Räume eines Gebäudes. |

> [!info]- Guidance
>Der Zweck der Authentifizierung von Zutritten liegt in der grundlegenden Absicherung physischer Zugänge gegen unbefugte Nutzung. Dies kann verhindern, dass Unbefugte Zugang zu sensiblen Bereichen oder Informationen erhalten. Ohne angemessene Zutrittskontrolle könnte beispielsweise ein nicht autorisierter Besucher in einen Serverraum gelangen und dort Hardware manipulieren, Datenträger entwenden oder Netzwerkkabel umstecken. Ebenso könnte ein ehemaliger Mitarbeiter ohne wirksame Authentifizierung weiterhin auf Systeme zugreifen und vertrauliche Daten entwenden oder geschäftskritische Informationen kompromittieren.  Bei der Umsetzung kann ein mehrstufiger Ansatz verfolgt werden, der verschiedene Authentifizierungsfaktoren kombiniert: Wissen (z.B. PIN-Codes, Passwörter), Besitz (z.B. Chipkarten, Tokens, Schlüssel) und biometrische Merkmale (z.B. Fingerabdruck, Gesichtserkennung). Die Stärke der Authentifizierung kann dabei an die Schutzbedürftigkeit des zu schützenden Bereichs angepasst werden – für hochsensible Bereiche können Zwei- oder Mehr-Faktor-Authentifizierungen implementiert werden. Als ergänzende Maßnahme kann ein Monitoring der Zutrittsereignisse eingerichtet werden, das ungewöhnliche Zugriffsversuche erkennt und meldet. Zudem kann die regelmäßige Überprüfung und Aktualisierung der Zutrittsberechtigungen dazu beitragen, dass nur aktuell berechtigte Personen Zugang erhalten. Die Formulierung "im Einklang mit den Festlegungen des Identitäts- und Berechtigungsmanagements" bedeutet, dass die Authentifizierung so erfolgt, wie in der Praktik IDM festgelegt. Hierzu gehört insbesondere die Verwendung aktueller kryptographischer Verfahren, wie sie im Thema Kryptographie zu finden ist.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | 5ac8362d-3e6b-4922-8e12-66a80d8d883b |> | ** Security Level** | [normal-SdT](security_level_normal-SdT) |> | ** Effort Level ** | [3](effort_level_3) |> | ** Alternate Identifier ** | 5ac8362d-3e6b-4922-8e12-66a80d8d883b |

> [!info]- Links> > related: [BER.6.4 Mehr-Faktor-Authentisierung am Perimeter](BSI/Grundschutz/Quellkataloge/Kernel/groups/controls/BER.6.4%20Mehr-Faktor-Authentisierung%20am%20Perimeter.md)> > related: [DET.3.1.1 Authentifizierungen](BSI/Grundschutz/Quellkataloge/Kernel/groups/controls/DET.3.1.1%20Authentifizierungen.md)
