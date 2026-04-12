---
tags:
- produktbeschreibung
- oscal_control
class: BSI-Stand-der-Technik-Kernel
type: control
control: KONF.12.1.2 Content Security Policy (CSP)
parent_control: KONF.12.1 Eingabevalidierung
stmt_target_object_category: Webbrowser
stmt_modal_verb: SOLLTE
stmt_action_word: einschränken
stmt_documentation: Konfigurationshistorie
control_effort_level: '1'
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# KONF.12.1.2 - Content Security Policy (CSP)
Tag: [[tags_Produktbeschreibung|Produktbeschreibung]]
Gruppe: [KONF.12 Kontrollierte Datenverarbeitung](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/KONF.12%20Kontrollierte%20Datenverarbeitung.md)
---

** Übergeordnetes Control: ** [KONF.12.1 Eingabevalidierung](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/controls/KONF.12.1%20Eingabevalidierung.md)
### Statement
|  Gruppe | Praktik | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - | - |
| <div style="background:#cccccc">*[Konfiguration (KONF)](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/KONF%20Konfiguration.md)*<br> *  &rarr; [Kontrollierte Datenverarbeitung](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/KONF.12%20Kontrollierte%20Datenverarbeitung.md) *</div> | [Konfiguration](practices_Konfiguration_8e46d34c-5145-44f8-882e-790e2dcffa09) | [Webbrowser](target_object_categories_Webbrowser_8b64663c-8388-40bc-a68b-473e753ae4d0) | [SOLLTE](modal_verbs_SOLLTE_a04a4855-3a63-4f06-b2f4-fc4d94aee2cf) | aufgerufene Inhalte anhand der von der Webseite bereitgestellten Content Security Policy |  | [einschränken](action_words_einschränken_c8289ac3-7877-4224-b43b-08e005e461ad) | [Konfigurationshistorie](documentation_guidelines_Konfigurationshistorie) | &mapsto;<span style="display:inline-block;border:1px solid;margin-left:8pt;padding:8pt;vertical-align:top;max-width:90%;">Konfiguration für Webbrowser SOLLTE aufgerufene Inhalte anhand der von der Webseite bereitgestellten Content Security Policy einschränken.</span>

> [!info]- Guidance
>Eine Content Security Policy (CSP) ist ein Sicherheitsmechanismus, der es einer Webseite erlaubt, dem Webbrowser mitzuteilen, von welchen Quellen er aktive Inhalte wie Skripte oder auch passive Inhalte wie Bilder laden darf. Durch diesen als Whitelist funktionierenden Ansatz kann die Institution die Angriffsfläche ihrer Webanwendungen erheblich reduzieren. Ohne eine wirksame CSP könnten Angreifer durch Cross-Site-Scripting-Angriffe (XSS) bösartige Skripte in eine Webseite einschleusen, die dann im Browser des Nutzers ausgeführt werden und beispielsweise sensible Daten auslesen oder Aktionen im Namen des Opfers durchführen könnten. Die Aktivierung einer CSP blockiert die Ausführung von nicht vertrauenswürdigen Skripten und das Laden unerwünschter Ressourcen und schützt somit die Integrität und Vertraulichkeit der Web-Sitzung.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | 65287ea4-9379-4088-adb0-774fb2b9ccbb |> | ** Security Level** | [normal-SdT](security_level_normal-SdT) |> | ** Effort Level ** | [1](effort_level_1) |> | ** Alternate Identifier ** | 65287ea4-9379-4088-adb0-774fb2b9ccbb |
