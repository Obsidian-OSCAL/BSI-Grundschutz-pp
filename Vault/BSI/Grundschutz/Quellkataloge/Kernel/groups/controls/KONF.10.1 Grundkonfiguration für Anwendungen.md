---
tags: oscal_control
class: BSI-Stand-der-Technik-Kernel
type: control
control: KONF.10.1 Grundkonfiguration für Anwendungen
stmt_target_object_category: Anwendungen
stmt_modal_verb: SOLLTE
stmt_action_word: dokumentieren
stmt_documentation: Konfigurationshistorie
control_effort_level: '3'
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# KONF.10.1 - Grundkonfiguration für Anwendungen
Gruppe: [KONF.10 Konfiguration von Anwendungen](BSI/Grundschutz/Quellkataloge/Kernel/groups/KONF.10%20Konfiguration%20von%20Anwendungen.md)
---

> [!example]- Untergeordnete Controls
> [KONF.10.1.1 Versionierung der Anwendungskonfiguration](BSI/Grundschutz/Quellkataloge/Kernel/groups/controls/KONF.10.1.1%20Versionierung%20der%20Anwendungskonfiguration.md)### Statement
|  Gruppe | Praktik | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - | - |
| <div style="background:#cccccc">*[Konfiguration (KONF)](BSI/Grundschutz/Quellkataloge/Kernel/groups/KONF%20Konfiguration.md)*<br> *  &rarr; [Konfiguration von Anwendungen](BSI/Grundschutz/Quellkataloge/Kernel/groups/KONF.10%20Konfiguration%20von%20Anwendungen.md) *</div> | [Konfiguration](practices_Konfiguration_8e46d34c-5145-44f8-882e-790e2dcffa09) | [Anwendungen](target_object_categories_Anwendungen_7e41ecf5-1831-4691-ad0c-4fc7bbc1b871) | [SOLLTE](modal_verbs_SOLLTE_a04a4855-3a63-4f06-b2f4-fc4d94aee2cf) | eine Grundkonfiguration |  | [dokumentieren](action_words_dokumentieren_1ed72769-e05f-4a97-ad2e-99a70f1480e8) | [Konfigurationshistorie](documentation_guidelines_Konfigurationshistorie) | &mapsto;<span style="display:inline-block;border:1px solid;margin-left:8pt;padding:8pt;vertical-align:top;max-width:90%;">Konfiguration für Anwendungen SOLLTE eine Grundkonfiguration dokumentieren.</span>

> [!info]- Guidance
>Eine Grundkonfiguration (engl. baseline configuration) bezeichnet in diesem Kontext einen dokumentierten Ausgangszustand einer Anwendung, der sowohl funktionale Anforderungen als auch sicherheitsrelevante Einstellungen berücksichtigt. Sie umfasst unter anderem Parameter wie Benutzerrechte, Logging-Einstellungen, Schnittstellenaktivierungen oder Verschlüsselungsoptionen und bildet damit die Referenz, auf die spätere Anpassungen zurückgeführt oder überprüft werden können. Fehlt eine nachvollziehbare Grundkonfiguration, könnte es bei Updates, Migrationen oder im Incident-Fall zu schwer erkennbaren Abweichungen kommen, die unerwünschte Sicherheitslücken hinterlassen. Eine klare Dokumentation kann dagegen die Nachvollziehbarkeit erhöhen, unerwünschte Änderungen sichtbar machen und den sicheren Betrieb der Anwendung unterstützen. Zur praktischen Umsetzung kann die Institution eine dokumentierte Konfigurationsvorlage entwickeln, die sowohl Herstellerempfehlungen als auch anerkannte Empfehlungen des BSI oder aus Benchmarks wie die des Center for Internet Security (CIS) berücksichtigt. Die Sicherheit von Anwendungen ist in besonderem Maße kontextbezogen: So könnten z.B. über E-Mail oder Messenger hoch vertrauliche Daten ausgetauscht werden oder auch öffentliche Informationen. Daher ist hier eine Vertiefung der Risikoanalyse empfehlenswert, die sich an der Verwendung der Anwendungen in Geschäftsprozessen orientiert. Dabei besteht ein enger Bezug zu Compliance-Anforderungen, zum Beispiel an finanzielle Transaktionen oder den Datenschutz, je nachdem welche Datenverarbeitungen mit der Anwendung vorgenommen werden.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | 23571325-0e60-4d28-96e1-ed57f794f790 |> | ** Security Level** | [normal-SdT](security_level_normal-SdT) |> | ** Effort Level ** | [3](effort_level_3) |> | ** Alternate Identifier ** | 23571325-0e60-4d28-96e1-ed57f794f790 |
