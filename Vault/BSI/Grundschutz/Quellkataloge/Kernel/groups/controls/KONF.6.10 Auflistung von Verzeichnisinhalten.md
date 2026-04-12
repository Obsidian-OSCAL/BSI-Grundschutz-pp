---
tags:
- produktbeschreibung_data_leak
- oscal_control
class: BSI-Stand-der-Technik-Kernel
type: control
control: KONF.6.10 Auflistung von Verzeichnisinhalten
stmt_target_object_category: Webserver
stmt_modal_verb: SOLLTE
stmt_action_word: einschränken
stmt_documentation: Konfigurationshistorie
control_effort_level: '2'
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# KONF.6.10 - Auflistung von Verzeichnisinhalten
> [!example]- Tags:> [[tags_Produktbeschreibung|Produktbeschreibung]]> [[tags_Data Leak|Data Leak]]
Gruppe: [KONF.6 Rollen und Berechtigungen](BSI/Grundschutz/Quellkataloge/Kernel/groups/KONF.6%20Rollen%20und%20Berechtigungen.md)
---

### Statement
|  Gruppe | Praktik | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - | - |
| <div style="background:#cccccc">*[Konfiguration (KONF)](BSI/Grundschutz/Quellkataloge/Kernel/groups/KONF%20Konfiguration.md)*<br> *  &rarr; [Rollen und Berechtigungen](BSI/Grundschutz/Quellkataloge/Kernel/groups/KONF.6%20Rollen%20und%20Berechtigungen.md) *</div> | [Konfiguration](practices_Konfiguration_8e46d34c-5145-44f8-882e-790e2dcffa09) | [Webserver](target_object_categories_Webserver_b1411d0f-ffd1-45b7-837b-cd97ba4ed9e7) | [SOLLTE](modal_verbs_SOLLTE_a04a4855-3a63-4f06-b2f4-fc4d94aee2cf) | die Auflistung von Verzeichnisinhalten |  | [einschränken](action_words_einschränken_c8289ac3-7877-4224-b43b-08e005e461ad) | [Konfigurationshistorie](documentation_guidelines_Konfigurationshistorie) | &mapsto;<span style="display:inline-block;border:1px solid;margin-left:8pt;padding:8pt;vertical-align:top;max-width:90%;">Konfiguration für Webserver SOLLTE die Auflistung von Verzeichnisinhalten einschränken.</span>

> [!info]- Guidance
>Über das Auflisten von Verzeichnisinhalten erhalten Angreifer Einblick in die interne Struktur des Systems und potenziell sensibler Daten. Zur Umsetzung kann in der Konfiguration des Webservers (z.B. Apache, Nginx) die Directory-Listing-Funktion deaktiviert werden. Alternativ kann über Dateien wie .htaccess der Zugriff auf die notwendigen Verzeichnisse eingeschränkt werden.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | ce8d6ad1-d414-48a3-b273-50fa01fd2ee6 |> | ** Security Level** | [normal-SdT](security_level_normal-SdT) |> | ** Effort Level ** | [2](effort_level_2) |> | ** Alternate Identifier ** | ce8d6ad1-d414-48a3-b273-50fa01fd2ee6 |
